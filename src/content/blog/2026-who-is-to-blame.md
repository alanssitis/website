---
title: "Who is to blame?"
description: >
  The U.S. military almost acted on faulty intelligence from a chatbot, in
  an operation that could have escalated into conflict with China. As LLMs
  get embedded into more critical systems, figuring out who's to blame
  when they fail is only getting harder.
pubDate: "Sep 22 2026"
updatedDate: "Sep 26 2026"
heroImage: "/src/assets/blog/2026-who-is-to-blame.jpeg"
heroImageAlt: "Picture out of the Google Moffett Place campus when I interned there in 2022."
---

_LLM disclosure: All the words and ideas were tought of and written by me. I
used an LLM to help edit and clean up in the last rounds of editing.
I am sympathetic to [Oxide's RFD on using LLMs as editors](https://rfd.shared.oxide.computer/rfd/0576#_llms_as_editors)._

_I'd like to acknowledge Adrian and Sai for going over drafts of this work and
follow up discussions._

Yesterday, I watched the [Democracy Now Daily Show](https://www.democracynow.org/shows/2026/9/21)
which covered a particularly concerning story. It was in this CNN report where
[U.S. military was provided with false intelligence on a Chinese ship by some chatbot](https://www.cnn.com/2026/09/18/politics/us-military-ai-false-intelligence-china-ship).
Thankfully, according to the report, additional scrutiny was applied just
before the planned operation to intercept the vessel which revealed the error,
an operation planned because of the false intelligence provided, an operation
that could have initiated a conflict between the U.S. and China.
The first question that came to my mind is this: who is to blame, the
individual that filed the report with the help of the chatbot or the chatbot that
produced the faulty intelligence at fault? This situation highlights the
limitations of the human-in-the-loop system, and, more importantly, the lack
of clarity on how we could assign blame when we involve chatbots into our
workflows.

I shall use chatbots and large language models (LLMs) interchangeably since in
most contexts here, they refer to the same system. It is also fair to assume
that the chatbot referenced in the report is backed by an LLM.

While it may be obvious to some readers that the responses from LLMs may
sometimes be incorrect even when conveyed as some truth, often referred to as
hallucinations, I have found that many do not seem to grasp this, or do not
care at all. We have seemingly come to associate authoritative
language with knowledgeable experts, and models have now employed it
whenever we ask them questions. Not to mention the anthropomorphic language
used by such systems which has led to our
['deskilling' of human empathy](https://www.404media.co/sherry-turkle-artificial-intimacy-podcast/).
A combination of these reasons, and potentially more, has even made it hard
even for those conscious of hallucinations to take LLM responses with incertitude.
Thus, the required validation of the responses from LLMs is now
often skipped. You see this in the code that people try to merge into
open source projects, and, closer to my own experience as an academic,
also in the class assignment submissions by students and even in
[paper submissions to academic conferences](https://medium.com/@TmlrOrg/asking-authors-about-their-own-papers-3d2e04e5dee0).

It may be easy to blame the humans that were **in** the loop that failed to
verify the response from the LLM, but the heavy unloading of the blame onto
humans has seemingly given companies and organizations the permission to use
them imprudently. If a chatbot on a government website, say on tax filing or
immigration law, offers incorrect or misleading counsel, is it the individual's
fault if they broke the law due to these responses? I watched and read about a
[Germany App built on an "AI platform"](https://www.heise.de/en/news/Germany-App-AI-to-simplify-applications-11348895.html)
that could fill out my applications [^1], so this question is certainly pressing.
There is legal precedent in multiple countries where companies are held
accountable for the information provided on their sites via a chatbot, such as
the [Air Canada case from 2024](https://www.bbc.com/travel/article/20240222-air-canada-chatbot-misinformation-what-travellers-should-know)
and a more recent case in [a German regional court that may go to federal court](https://www.justiz.nrw/presse/2026-05-12).

Generally, when you contract services from someone to fill out legal forms for
you, they can be held accountable if something costly went wrong. However, with
LLMs, companies (especially those that develop them) have tried to
distance themselves from the very systems they develop **and** host on their
servers (or on a cloud provider). An outrageous case is the countless
hacks carried out by swarms of "agents" against other corporations [^2], since
hacking other companies is considered a
[felony](https://en.wikipedia.org/wiki/Computer_Fraud_and_Abuse_Act) in
the U.S. -- I have yet to see a headline of such a charge being brought
against the responsible companies.

If such continued lack of scrutiny by governments goes on, there will be an
increased lack of incentive for the companies that develop and deploy LLMs to
safeguard them, as these systems have been treated as entities without
any accountability. I don't think they should be treated as just tools as some may
know them. Perhaps we could look at how cars are treated differently from tools
you could buy at the corner store, where the manufacturer is still culpable
for various faults that extend beyond faulty components such as
[bad brakes](https://www.heise.de/en/news/BMW-Huge-recall-and-profit-warning-due-to-defective-Conti-brakes-9864793.html)
and towards more fundamental issues with its engineering, such
as [problematic door design](https://www.reuters.com/legal/litigation/tesla-sued-by-family-who-says-faulty-doors-led-wrongful-deaths-fiery-crash-2025-11-03/).

Perhaps an exaggerated analogy can show my point: if an autonomous car company
operated cars that crashed into other cars occasionally, with no fatalities,
would it be acceptable even if it happened at rates similar to those at which
LLMs hallucinate? Should the company be held accountable if these cars decided
to act as a "swarm" and determined that the best way to reach their goal is to
drive through buildings? What if there is a human behind the wheel that can
intervene? Would it then be the human's fault if the car crashes? However,
notice that in the swarm scenario of the recent "breakouts" from models, they
explicitly have no human oversight, so no human behind the wheel. Existing
understanding of fault for automobiles do not easily apply here, and we
should therefore develop something that is befitting to how these hypothetical
autonomous cars operate. The same should occur with LLMs right now.

Irrespective of the above analogy, there is a decent chance that the deployed
LLMs have had a significantly higher impact than autonomous cars. If the LLMs
are already deployed for intel in the U.S. military for targeting as reported by
CNN above and other sources, it is fair to posit that these systems may have
played some role in potential war crimes committed by the U.S. military,
regardless of whether the responses provided by the systems were hallucinations
or not [^3] [^4]. If mistakes occured, or if illegal actions were taken with
some involvement of an LLM, it is not clear who is to blame.

It also does not really make sense to assign the blame to something that is a
tool for those with power, as it allows them to relinquish responsibility.
Tools that are almost as good as humans, and even worse
than humans, have been used to replace human labor for varying reasons. The
information age, which started from the advent of transistors, has introduced
algorithms that could act as oracles for human decisions. This has made it hard
to determine who we could blame for bad decisions as these algorithms can hide
behind the ruse of being impartial mathematics. Algorithms have allowed insurance
companies, credit reporting companies, and social media companies make
decisions in our lives autonomously at a large scale without providing a clear
entity to blame for bad, and occasionally harmful decisions. The history of
accountability for the harms caused by algorithms and the companies behind
them has been a mixed record, often requiring
[public reporting of long, systematic damages](https://www.propublica.org/article/cigna-pxdx-medical-health-insurance-rejection-claims).
This does not mean that we should just ignore the current developments. We
should learn from them as they can serve as warning of what impunity can afford
those that benefit from algorithms and ignores their harms.

I believe we need to rethink how we treat and assign blame when these systems
make mistakes or cause harm. However, if labs can train and serve these
LLMs at large cost to human society with [immunity](https://www.wired.com/story/openai-backs-bill-exempt-ai-firms-model-harm-lawsuits/),
while others deploy them with disregard to its [effects](https://www.404media.co/ai-agent-platform-reinvents-spam-floods-inboxes-worldwide/),
I fear that consequences may never fall on those that may deserve it, whomever
_we_ decide it should be.
Who do we blame had the U.S. carried out its operation against the Chinese
vessel? To revisit the above analogy: even if we humans are behind the wheel of
a fleet of cars, who do we blame if the fleet rams through the buildings to
take us to our destination?

[^1]: In an ideal world, this would be a godsend if it did more than just online paperwork, but unfortunately a lot is physical. German paperwork sometimes feels harder than research.

[^2]: A simple search engine search would give you various examples from different companies.

[^3]: U.S. military drone hitting a school in Iran, [Bloomber report](https://www.bloomberg.com/graphics/2026-iran-school-attack/) and further [New York Times analysis](https://www.nytimes.com/2026/09/17/world/asia/us-iran-school-strike-report.html).

[^4]: U.S. strikes on boats around the Caribean and Pacific coasts off of Mexico and South America may be crimes against humanity, as [reported by the NYT](https://www.nytimes.com/2026/09/21/world/americas/us-boat-strikes-crimes-un.html).
