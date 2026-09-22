---
title: "Who is to blame?"
description: >
  Blah blah
pubDate: "Sep 22 2026"
heroImage: "/src/assets/blog/2026-who-is-to-blame.jpeg"
heroImageAlt: "Picture out of the Google Moffett Place campus."
draft: true
---

Yesterday, I watched the [Democracy Now Daily Show](https://www.democracynow.org/shows/2026/9/21)
which covered a particularly concerning story. It was this CNN report where
[U.S. military was provided with false intelligence by some chatbot](https://www.cnn.com/2026/09/18/politics/us-military-ai-false-intelligence-china-ship).
Thankfully, according to the report, additional scrutiny was applied just
before the planned operation to intercept the vessel which revealed the error,
an operation planned because of the false intelligence provided.
The first question that came to my mind is this: who is to blame, the
individual that filed the report with help of the chatbot or the chatbot that
produced the faulty intelligence at fault? This situation highlights the
limitations of the human-in-the-loop system many have adopted.

I shall use chatbots and large language models (LLMs) interchangeably since in
most contexts here, they refer to the same system. It is also fair to assume
that the chatbot referenced in the report is backed by an LLM.

While it may be obvious to some readers that the responses from LLMs may
sometimes be incorrect even when conveyed as some truth, often referred to as
hallucinations, I have found that many do not seem to grasp this, or do not
care at all. We have seemingly grown accustomed to authoritative language as
that used by those knowledgable and experts, and models have now employed it
whenever we ask it questions. Not to mention the anthropomorphic language
tendencies used by such systems which has led to our
['deskilling' of human empathy](https://www.404media.co/sherry-turkle-artificial-intimacy-podcast/).
Without a regard to why, the required validation of the responses from LLMs is now
often skipped. You see this in the code that is often attempted to be merged
in many open source projects, and, closer to me now, also in the assigment
submissions by students for classes and even in 
[paper submissions to academic conferences](https://medium.com/@TmlrOrg/asking-authors-about-their-own-papers-3d2e04e5dee0).

It may be easy to blame the humans that were in the loop that failed to
verify the response from the LLM, but, the heavy offloading of the blame onto
humans has seemingly given companies and organizations the permission to use
them imprudently. If a chatbot in a government website, say on tax filing or
immigration law, offers incorrect or misleading counsel, is it the individual's
fault if they broke the law due to these responses? I watched and read about a
[Germany app built on an "AI platform"](https://www.heise.de/en/news/Germany-App-AI-to-simplify-applications-11348895.html)
that could fill out my applications [^2], so this question is certainly presient.
There is legal precedent in multiple countries where companies are held
accountable to the information provided on their sites via a chatbot, such as
the [Air Canada case from 2024](https://www.bbc.com/travel/article/20240222-air-canada-chatbot-misinformation-what-travellers-should-know)
and a more recent case in [a German regional court that may go to federal court](https://www.justiz.nrw/presse/2026-05-12).

Generally, when you contract services from someone to fill out legal forms for
you, they can be held accountable if something costly is wrong. However, with
LLMs, companies (especially those that develop them), have seemingly tried to
distance themselves from the very systems they developed **and** host on their
servers (or on a cloud provider). An outrageous case are the countless
hacks carried out by swarms of "agents" against other corporations [^3], which
are [felonies](https://en.wikipedia.org/wiki/Computer_Fraud_and_Abuse_Act) in
the U.S. -- I have yet to see a headline of such a charge being brought to the
responsible companies.

If such continued lack of scrutiny by governments continues, there will be a
continued lack of incentive for the companies that develop and deploy LLMs to
safeguard these systems, as these systems may be treated as entities without
any accountability. I don't think they should be treated as just tools as we
know them. Perhaps we could look at how cars are treated differently to tools
you could buy at the corner store, where the manufacturer is still culpable
for various faults that extend beyond faulty components such as
[bad breaks](https://www.heise.de/en/news/BMW-Huge-recall-and-profit-warning-due-to-defective-Conti-brakes-9864793.html)
and towards more fundamental issue in the engineering of the automotive, such
as [problematic door design](https://www.reuters.com/legal/litigation/tesla-sued-by-family-who-says-faulty-doors-led-wrongful-deaths-fiery-crash-2025-11-03/).

Perhaps an inaccurate analogy can show my point: if an autonomous car company
operated cars that crashed into other cars occasionally, with no fatalaties,
would it be acceptable even if it happened at similar rates at which LLMs
hallucinate? Should the company be held accountable if these cars decided to
act as a "swarm" and determined that the best way to reach their goal is to
drive through buildings? What if there is a human behind the wheel that can
intervene, would it then be the human's fault if the car crashes? However,
notice that in the swarm scenario of the recent "breakouts" from models, they
explicitly have no human oversight, so no human behind the wheel. Existing
understanding of fault for automotives would not easily apply here, and we
should therefore develop something that is more fitting to how these
hypothetical autonomous cars operate. The same should occur with LLMs right now.

Irrespective of how you feel about the above analogy, there is a decent chance
that the deployed LLMs have had a significantly higher impact. If they are
already deployed for intel in the U.S. military for targetting as reported by
CNN above and other sources, it is fair to posit that these systems may have
played some role in potential war crimes enacted by the U.S. military,
regardless of whether the responses provided by the systems were hallucinations
or not [^4] [^5] [^6].

Carissa Véliz, in her most recent book [Prophecy](https://www.carissaveliz.com/prophecy),
introduces a perspective that I would attempt to summarize as follows: LLMs are
prediction machines, and all of its responses are predictions. Véliz writes
that predictions, which are often made about the future, are _guesses_, are
_wishful_ for those that made them, are about _power_, are
_sometimes impossible_, and can be outright _harmful_. Even when asked about
something that has past, or is presently happening, the LLMs would make a
prediction given its vast training data and context. This seems consistent
with how models always answer with a statement even when they are hallucinating,
when asked for a fact known from the past or present.

To build an all-knowing LLM given the current architecture that avoids this
would be hard to verify, as we, humans, also struggle with it. This is because,
Véliz claims, it requires knowning what we don't know. We often identify this
as wisdom, which is often attributed with age and experience. Perhaps we should
consider that most of such systems are being built by individuals that are not
of the age we would asume wise people to be. I would never consider myself
wise, I am 23! The engineers and scientists building these systems may be
smart, but in my countless times in Silicon Valley meeting founders and hungry
engineers, I observed that wisdom still seemed to be something reserverd to the
experienced. One thing should be made clear, however, errors made by startups
usually result in lost economic capital, not human lives [^7]. Conventional
wisdom should often be challenged, but I personaly deem human lives too costly
to be risked for this sake. Putting these novel systems in scenarios where they
decide whether lives can be risked should make aparent the current need to
determine adequate designation of blame.

Tools that are almost as good as humans, and even worse than humans, have been
used to replace human labor. The information age, which started from the advent
of computers, has introduced algorithms that could act as oracles for human
decisions. This has allowed insurance companies, credit reporting
companies, and social media companies to make decisions in our lives
autonomously at a large scale. Unfortunately, the history of accountability for
the damages the companies behind these algorithms have done is a mixed record.
This does not mean that we should just ignore the current developments, but as
a warning of what impunity has afforded them.

I believe we need to rethink how we treat and assign blame when these systems
cause harm, and I ask for an increased level of scrutiny to be applied to
frontier labs and companies deploying LLMs and future machine learning methods.
We should learn from previous legislation that has been introduced to reduce
harm and act proactively, learn from history and not wait until the
consequences become too significant to ignore. As a researcher, I will be
thinking about ways this could be brought about from my position. There will
always be pushback from companies and consumers. If companies can train and
deploy such systems with a Laissez-faire attitude, I fear that there will not
be enough incentive to push for safer, accountable LLMs and whatever system
comes after them. To revisit the above inadequate analogy, even if we humans
are behind the wheel of a fleet of cars, the fleet may still ram through the
buildings if we remain asleep behind the wheel.

[^1]: Insightful discussion on this and how it came about by Timothy Snyder in his blog https://snyder.substack.com/p/helping-the-terrorists-to-win
[^2]: In an ideal world, this would be a godsend if it did more than just online paperwork, but unfortunately a lot is physical. German paperwork sometimes feels harder than research.
[^3]: A simple search engine search would give you various from different companies.

[^4]: https://www.bloomberg.com/graphics/2026-iran-school-attack/
[^5]: https://www.nytimes.com/2026/09/17/world/asia/us-iran-school-strike-report.html
[^6]: https://www.nytimes.com/2026/09/21/world/americas/us-boat-strikes-crimes-un.html

[^7]: I would guess that most failed startups did not end in large casualties. Otherwise, I would be shocked that Silicon Valley still operated as such.
