import Meta from '../components/Meta';
import Image from '../components/Image';
import Title from '../components/Title';
import Author from '../components/Author';
import Description from '../components/Description';

const FeaturedArticle = () => (
  <section className="mx-auto">
    <div className="container px-4">
      <article className="grid grid-cols-1 md:grid-cols-2 shadow-sm cursor-pointer shadow-sm transition duration-300 ease-in-out hover:shadow-lg mt-16">
        <Image
          src="https://picsum.photos/1024/760"
          className="h-96"
        />
        <div className="flex flex-col justify-between bg-white h-96 p-8">
          <div>
            <Title className="text-2xl lg:text-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Title>
            <Meta className="mt-4">
              Category | August 7, 2020
            </Meta>
            <Description className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Description>
          </div>
          <Author
            name="Joel Baker"
            image="https://picsum.photos/100"
          />
        </div>
      </article>
    </div>
  </section>
);

export default FeaturedArticle;
