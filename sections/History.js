import { FormattedMessage } from 'react-intl';

import Jumbotron from 'components/Jumbotron';
import ExternalLink from 'components/ExternalLink';

const History = () => (
  <section className="px-auto">
    <h2 hidden>
      <FormattedMessage id="about.history" />
    </h2>
    <Jumbotron
      image="/bakers.jpg"
      alt="Joel and Nicole Baker"
    >
      <FormattedMessage id="about.nicolaAndJoelOwe" />
    </Jumbotron>
    <Jumbotron
      reversed
      image="/kamenari.jpg"
      className="bg-white dark:bg-gray-700"
      alt="View of Bay of Kotor fron Kamenari village"
    >
      <FormattedMessage
        id="about.joelHadJust"
        values={{
          link: (
            <ExternalLink href="https://www.kingjamesbibleonline.org/Acts-Chapter-8/#12">
              Acts 8:12-17
            </ExternalLink>
          ),
        }}
      />
    </Jumbotron>
    <Jumbotron
      image="/joel.jpg"
      alt="Joel preaching"
    >
      <FormattedMessage
        id="about.joelFelt"
        values={{
          link1: (
            <ExternalLink href="https://www.kingjamesbibleonline.org/Romans-Chapter-5/#6">
              Rom. 5:6
            </ExternalLink>
          ),
          link2: (
            <ExternalLink href="https://www.kingjamesbibleonline.org/Acts-Chapter-1/#8">
              Acts 1:8
            </ExternalLink>
          ),
          link3: (
            <ExternalLink href="https://www.kingjamesbibleonline.org/John-Chapter-20/#22">
              Jn. 20:22
            </ExternalLink>
          ),
          link4: (
            <ExternalLink href="https://www.kingjamesbibleonline.org/Acts-Chapter-1/#3s">
              Acts 1:3-8
            </ExternalLink>
          ),
        }}
      />
    </Jumbotron>
    <Jumbotron
      reversed
      image="/bible.jpg"
      className="bg-white dark:bg-gray-700"
      alt="Bible"
    >
      <FormattedMessage id="about.forThisPurpose" />
    </Jumbotron>
  </section>
);

export default History;
