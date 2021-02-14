import Meta from './Meta';
import Image from './Image';
import Title from './Title';
import Author from './Author';
import Description from './Description';

const Article = () => (
  <article className="bg-white cursor-pointer shadow-sm transition duration-300 ease-in-out hover:shadow-lg">
    <Image
      className="h-96"
      src="https://picsum.photos/800"
    />
    <div className="flex flex-col justify-between p-8 h-96">
      <div>
        <Title className="text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Title>
        <Meta className="mt-4">
          Category | Feb 6, 2021
        </Meta>
        <Description className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </Description>
      </div>
      <Author
        name="Joel Baker"
        image="https://picsum.photos/100"
      />
    </div>
  </article>
);

export default Article;
