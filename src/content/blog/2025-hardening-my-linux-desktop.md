---
title: "Hardening My Linux Desktop"
description: >
    A collection of notes and a brief walkthrough on how I went about to
    harden a new desktop computer running Arch Linux.
pubDate: "June 8 2025"
heroImage: "/src/assets/blog/hardening-my-linux-desktop.jpeg"
heroImageAlt: "A herd of cows sitting on a grassy hill."
---

As a computer nerd, one of the most exciting things is getting new technology
-- cool tech that runs circles around anything you've ever had. Prior to
getting my own desktop, I only ever had experience with laptops; upgrading and
heavily ricing them. But I never really had the money nor a good reason to
build a PC.

I was a huge fan of the PC building YouTubers like
[JayzTwoCents](https://www.youtube.com/c/jayztwocents) and
[LTT](https://www.youtube.com/user/LinusTechTips),
but never really got the chance to follow along. Thankfully, I am fortunate to
be working at a job that afforded me the dispensable income to spec out and
buy a powerful personal desktop computer. I finally got the chance to apply
all the knowledge I learned through the videos I used to watch religiously and
spec'ed out a PC I was happy with.

While I've been daily driving some Linux environment since 2021, I first
setup Arch Linux dual-booted with Windows. This was because I was still playing
video games with my friends that only ran on Windows due to their required
anti-cheat software, with all their invasive kernel-level access glory
([small writeup on their negatives](https://gist.github.com/stdNullPtr/2998eacb71ae925515360410af6f0a32)).
Thankfully, we eventually stopped playing games that could only run on Windows.
I took this opportunity to bite the bullet and drop Windows and re-do my whole
setup.

This time, I wanted to get more in the weeds with the security of a daily-driver
desktop environment and wanted to be more intentional with it -- especially
with the security features. Armed with a new
[Arch ISO](https://archlinux.org/download/) stick, I booted into it on my PC,
and had the [Arch Wiki Security Page](https://wiki.archlinux.org/title/Security)
open on my phone. With nothing to lose, other than my sanity and the photos I
forgot to back up, I began hacking away.

# Starting Grounds

Early on in my Linux-hacking era, like most folks, I was distro-hopping to find
what worked for me. I started with [Ubuntu](https://ubuntu.com/desktop) and
its derivatives [Mint](https://linuxmint.com/) and
[Pop!_OS](https://system76.com/pop/), briefly checked out [Debian](https://www.debian.org/),
[NixOS](https://nixos.org/), and [CentOS](https://www.centos.org/), and finally
ended up loving [Arch](https://archlinux.org/). Sidenote: _This was almost 4
years ago so I probably missed some of the other distros I tried out and don't
really have the order off the top of my head)._

I really hated manually setting it up for the first time and it took me various
tries. However, I eventually got it and got really proficient at it. However,
the first system I setup was definitely not secure in any shape or form.

This time around, I just leveraged [`archinstall`](https://github.com/archlinux/archinstall)
to get me to a initial setup I was happy with, and manually changed it up with
the setup and features I wanted incrementally.

# Full Disk Encryption

One of the nice things with `archinstall` is that the disk partitioning was
rather straightforward. I have two NVME SSDs, and I set them up as such: The
first one holds the boot, swap and root partitions, and the other disk just
has the home partition. With this setup. I enabled full disk encryption (FDE)
with [LUKS](https://en.wikipedia.org/wiki/Linux_Unified_Key_Setup) to both the
root and home partition.

With basic FDE configured, this wass one of the first few things I messed with
once I have installed the configuration on my system.

## LUKS with FIDO

One thing I did not mention was that I also enrolled a FIDO credential on LUKS
in `archinstall`. This was because I had to re-do it again. There were a few
things I changed with the LUKS enrollments:

- Saved FIDO credentials did not have user verification enabled, I wanted to enable it
- A password I entered in the LUKS config was used as a backup, so I added a recovery password
- The home partition was encrypted with a password in the root partition, this
is convenient but not so much if I wanted to mount it manually

So, I used `systemd-cryptenroll` to re-do the FIDO credential for both
partitions, added a recovery credential, and removed the password credential.
This was rather straightforward, and I just changed the configuration in
`/etc/crypttab` to use the new FIDO credential to unlock the home partition.

## Failed Attempts at Encrypted [Hibernations](https://wiki.archlinux.org/title/Power_management/Suspend_and_hibernate#Hibernation),

After successfully setting up the root and home partition, I moved on with
encrypting the swap partition. The Arch wiki has an
[entry](https://wiki.archlinux.org/title/Dm-crypt/Swap_encryption) on this. I
was able to encrypt the swap with LUKS similarly to the other partitions, with
both a FIDO and a recovery credential. I added the swap partition to the
`/etc/crypttab` config and began running into some linux-config-skill-issues.

In my first attempts at hibernation, I updated the kernel parameters and it did
not work at all. I was getting stuck at the LUKS unblock stage and could not
really debug it since I did not have a root account setup. After a whole weekend
of debugging and trial-and-erroring (mostly erroring), I gave up.

### Hope?

As I was writing this blog, I found another way I could try to make
hibernations work using systemd. Unfortunately, it did not work. I know I am
very close to the correct solution, but it's escaping my grasp. Perhaps I am
missing a disk decryption key-value-pair somewhere. Not really sure if it's
that worth it for me since I often restart my PC and don't really feel like
I'd benefit from hibernations.

# Secure Boot

I've had plenty of experience secure booting on Linux. In my undergrad, I had
a course on "Hardware and Software Security" that was taught by
[Santiago Torres-Arias](https://badhomb.re/) (hopefully he renewed his cert
there), who also happens to be part of the [Arch Security Team](https://wiki.archlinux.org/title/User:Sangy).

One of the neat things we learned was the boot chain process, and how it can
be secured. Santiago introduced `sbctl`, and one of our assignments was to
setup secure boot on a VM. After this learning experience. I set it up on my
laptop, which was then running Pop!_OS.

This time, it was actually much simpler. [Morten Linderud](https://github.com/Foxboron),
the author of `sbctl`, is also a member of the Arch security team. The plugin
system for pacman is much better and I no longer need to manually make sure
that the EFI images are signed.

## Locking down BIOS

Secure boot woud not be effective if you can just plugin a USB and boot into
it. Therefore, one other thing I did was to lock the BIOS behind a password.
Therefore, in order to boot into a USB, you will need to provide an additional
password.

# Networking

My desktop is running in my own network behind a router firewall, and I do not
plan to expose it to the internet. So, I just setup the default
[`nftables`](https://wiki.archlinux.org/title/Nftables) config. This is
good enough for now. If anyone that reads this believes otherwise, I'd love to
hear you out!

# Future Work

## Getting Hibernation Working

Once I figure out how to resume off the swap partition, all will be good. I
think the `/etc/mkinitcpio.conf` (systemd) with a kernel config with the swap
partition would work. But we'll see.

## Enforce Secure Boot on Boot + TPM2

One thing I need to figure out is how to make it such that the system can only
boot when secure boot is enabled. This would stop the potential attacks of
removing the SSDs from the motherboard and placing them on another system.

One other potential way of solving this is by placing the LUKS keys in the TPM.
But I would want to enforce FIDO with TPM for the LUKS credentials.

## Backups

At the time of writing, I am expecting a small-factor computer to arrive next
week which would act as my homelab. I plan to upload backups of my desktop and
laptop to it and a cloud provider. They should be encrypted locally before
upload using a tool like [age](https://github.com/FiloSottile/age).

## Learn more about Networking

I would like to learn more about DNSSEC and other things of the like. Maybe a
more tailored lists of TLS certs I trust, and few more networking-related
configs.
