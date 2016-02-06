// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  Layout,
  Link,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const slideTransition = ["spin", "zoom"];
const images = {
  city: require("../assets/city.jpg").replace("/", ""),
  legos: require("../assets/legos.jpg").replace("/", ""),
  moduleCounts: require("../assets/module_counts.png").replace("/", ""),
  redmonk: require("../assets/redmonk.png").replace("/", ""),
  shapeSorter: require("../assets/shape_sorter.jpg").replace("/", ""),
  tools: require("../assets/tools.jpg").replace("/", "")
};

preloader(images);

const theme = createTheme({
  primary: "#09b5c4"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={slideTransition} transitionDuration={500}>
          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              JavaScript
            </Heading>
            <Heading size={2} textColor="white">
              Quo Vadis?
            </Heading>
          </Slide>


          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              JavaScript Usage on Sites
            </Heading>
            <Markdown>
          {`
* 2011 - 38.2%
* 2013 - 60.4%
* 2015 - 65.0%
* 2016 - 71.3%
* Source: [W3Techs](http://w3techs.com/technologies/history_overview/javascript_library/all/y)
          `}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Layout>
              <Link href="http://redmonk.com/jgovernor/2015/07/31/programming-language-rankings-summer-2015/">
                <Image src={images.redmonk} />
              </Link>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} textColor="tertiary">
              Module Counts
            </Heading>
            <Layout>
              <Image src={images.moduleCounts} padding="20px" />
            </Layout>
            <Layout>
              <Text>
                <Link href="http://www.modulecounts.com/">modulecounts.com</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.shapeSorter} align="flex-end flex-end">
            <Text>
              <Link textColor="tertiary" href="https://www.flickr.com/photos/ellasdad/425813314">Andy (CC BY)</Link>
            </Text>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.legos} align="flex-end flex-end">
            <Text>
              <Link textColor="tertiary" href="https://pixabay.com/en/lego-blocks-bricks-toy-game-252602/">estefania17 (PD)</Link>
            </Text>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.tools} align="flex-end flex-end">
            <Text>
              <Link textColor="tertiary" href="https://www.flickr.com/photos/17178266@N00/4334202250/">Meghana Kulkarni (CC BY-NC)</Link>
            </Text>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Questions?
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading size={1} caps fit textColor="primary">
              Made with sisu in Finland by
            </Heading>
            <Link href="https://twitter.com/bebraw">
              <Heading caps fit size={2} textColor="secondary">
                Juho Vepsäläinen
              </Heading>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}