import { FormattedMessage } from 'react-intl';

import Title from 'components/Title';
import ExternalLink from 'components/ExternalLink';

const Statement = () => (
  <section className="px-auto">
    <div className="container flex justify-center mx-auto">
      <div className="max-w-4xl px-4 py-16">
        <Title
          as="h2"
          className="text-2xl md:text-4xl lg:text-4xl text-center underline"
        >
          <FormattedMessage id="about.statementOfFaith" />
        </Title>
        <p className="text-xl mt-8">
          <FormattedMessage id="about.weAreEvangelical" />
        </p>
        <ol className="list-decimal text-xl ml-5 mt-4">
          <li className="mt-4">
            <FormattedMessage
              id="about.weBelieveInOneGod"
              values={{
                link: (
                  <ExternalLink href="https://www.kingjamesbibleonline.org/John-Chapter-1/#4">
                    Jn. 1:1-4
                  </ExternalLink>
                ),
              }}
            />
          </li>
          <li className="mt-4">
            <FormattedMessage
              id="about.weBelieveThatTheLord"
              values={{
                link1: (
                  <ExternalLink href="https://www.kingjamesbibleonline.org/Hebrews-Chapter-1/#3">
                    Heb. 1:3
                  </ExternalLink>
                ),
                link2: (
                  <ExternalLink href="https://www.kingjamesbibleonline.org/1-Timothy-Chapter-3/#16">
                    1 Tim. 3:16
                  </ExternalLink>
                ),
              }}
            />
          </li>
          <li className="mt-4">
            <FormattedMessage
              id="about.weBelieveThatTheWhole"
              values={{
                link: (
                  <ExternalLink href="https://www.kingjamesbibleonline.org/2-Timothy-Chapter-3/#16">
                    2 Tim. 3:16
                  </ExternalLink>
                ),
              }}
            />
          </li>
          <li className="mt-4">
            <FormattedMessage
              id="about.weBelieveInThePersonal"
              values={{
                link1: (
                  <ExternalLink href="https://www.kingjamesbibleonline.org/Romans-Chapter-3/#25">
                    Rom. 3:25
                  </ExternalLink>
                ),
                link2: (
                  <ExternalLink href="https://www.kingjamesbibleonline.org/Romans-Chapter-10/#9">
                    10:9-10
                  </ExternalLink>
                ),
              }}
            />
          </li>
          <li className="mt-4">
            <FormattedMessage
              id="about.weBelieveInTheSanctifying"
              values={{
                link: (
                  <ExternalLink href="https://www.kingjamesbibleonline.org/1-Peter-Chapter-1/#22">
                    1 Pet. 1:22-23
                  </ExternalLink>
                ),
              }}
            />
          </li>
          <li className="mt-4">
            <FormattedMessage
              id="about.weBelieveThatGod"
              values={{
                link1: (
                  <ExternalLink href="https://www.kingjamesbibleonline.org/1-Peter-Chapter-2/#24">
                    1 Pet. 2:24
                  </ExternalLink>
                ),
                link2: (
                  <ExternalLink href="https://www.kingjamesbibleonline.org/Matthew-Chapter-8/#17">
                    Mt. 8:17
                  </ExternalLink>
                ),
              }}
            />
          </li>
        </ol>
      </div>
    </div>
  </section>
);

export default Statement;
