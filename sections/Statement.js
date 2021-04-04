import Title from 'components/Title';
import ExternalLink from 'components/ExternalLink';

const Statement = () => (
  <section className="px-auto">
    <div className="container flex justify-center mx-auto">
      <div className="max-w-4xl px-4 py-16">
        <Title className="text-2xl md:text-4xl lg:text-4xl text-center underline">
          Statement of Faith
        </Title>
        <p className="text-xl mt-8">
          We are evangelical Christians, who have a registered pastoral ministry under Crkve Hristovog Jevandjelja
          in Podgorica, Montenegro. We are not a sect; which does not believe in the basic Biblical faith of Christianity.
        </p>
        <ol className="list-decimal text-xl ml-5 mt-4">
          <li className="mt-4">
            We believe in one God in 3 forms; the Father, Son and Holy Spirit, who created all that exists
            <br />
            (<ExternalLink href="https://www.kingjamesbibleonline.org/John-Chapter-1/#4">Jn. 1:1-4</ExternalLink>).
          </li>
          <li className="mt-4">
            We believe that the Lord Jesus Christ is the only born Son of God: who was conceived by the Holy Spirit and born of the virgin Mary. He was sinless, crucified, died, buried, risen from the dead, ascended into heaven and sits at the right hand of God the Father there
            <br />
            (<ExternalLink href="https://www.kingjamesbibleonline.org/Hebrews-Chapter-1/#3">Heb. 1:3</ExternalLink>; <ExternalLink href="https://www.kingjamesbibleonline.org/1-Timothy-Chapter-3/#16">1 Tim. 3:16</ExternalLink>).
          </li>
          <li className="mt-4">
            We believe that the whole Bible is the inspired Word of God
            (<ExternalLink href="https://www.kingjamesbibleonline.org/2-Timothy-Chapter-3/#16">2 Tim. 3:16</ExternalLink>).
          </li>
          <li className="mt-4">
            We believe in the personal salvation of believers by faith alone in the shed blood of Jesus
            <br />
            (<ExternalLink href="https://www.kingjamesbibleonline.org/Romans-Chapter-3/#25">Rom. 3:25</ExternalLink>, <ExternalLink href="https://www.kingjamesbibleonline.org/Romans-Chapter-10/#9">10:9-10</ExternalLink>).
          </li>
          <li className="mt-4">
            We believe in the sanctifying effect of the Word of God and the Holy Spirit. Sanctification is seen in holiness, purity and integrity of heart and life
            (<ExternalLink href="https://www.kingjamesbibleonline.org/1-Peter-Chapter-1/#22">1 Pet. 1:22-23</ExternalLink>).
          </li>
          <li className="mt-4">
            We believe that God still heals today through faith in the name of Jesus; and healing is a part of the redemption that Jesus paid for
            (<ExternalLink href="https://www.kingjamesbibleonline.org/1-Peter-Chapter-2/#24">1 Pet. 2:24</ExternalLink>; <ExternalLink href="https://www.kingjamesbibleonline.org/Matthew-Chapter-8/#17">Mt. 8:17</ExternalLink>).
          </li>
        </ol>
      </div>
    </div>
  </section>
);

export default Statement;
