// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
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
require("./custom.css");

const slideTransition = ["slide"];
const images = {
  assembly: require("../assets/assembly.jpg").replace("/", ""),
  babel: require("../assets/babel.jpg").replace("/", ""),
  city: require("../assets/city.jpg").replace("/", ""),
  googleTrends: require("../assets/google-trends.png").replace("/", ""),
  components: require("../assets/components.jpg").replace("/", ""),
  cowboy: require("../assets/cowboy.jpg").replace("/", ""),
  dinosaurs: require("../assets/dinosaurs.png").replace("/", ""),
  eich: require("../assets/eich.jpg").replace("/", ""),
  enterprise: require("../assets/enterprise.jpg").replace("/", ""),
  flow: require("../assets/flow.jpg").replace("/", ""),
  guruMeditation: require("../assets/guru_meditation.png").replace("/", ""),
  jumper: require("../assets/jumper.jpg").replace("/", ""),
  jobs: require("../assets/jobs.png").replace("/", ""),
  legos: require("../assets/legos.jpg").replace("/", ""),
  npmShape: require("../assets/npm_shape.png").replace("/", ""),
  moduleCounts: require("../assets/module_counts.png").replace("/", ""),
  redmonk2015: require("../assets/redmonk.png").replace("/", ""),
  redmonk2019: require("../assets/redmonk-2019.png").replace("/", ""),
  shapeSorter: require("../assets/shape_sorter.jpg").replace("/", ""),
  survivejs: require("../assets/survivejs.png").replace("/", ""),
  tools: require("../assets/tools.jpg").replace("/", ""),
  troll: require("../assets/troll.png").replace("/", ""),
  types: require("../assets/types.jpg").replace("/", ""),
  unique: require("../assets/unique.png").replace("/", "")
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
            <Heading size={1} fit lineHeight={1} textColor="black">
              JavaScript
            </Heading>
            <Heading size={2} textColor="white">
              Quo Vadis?
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <Image src={images.eich} margin="0px auto 40px" height="400px" />
            <Heading size={2} caps textColor="primary" textFont="primary">
              Brendan Eich
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>2011, 38.2% of sites use JavaScript</Quote>
              <Cite>
                <Link href="http://w3techs.com/technologies/history_overview/javascript_library/all/y">
                  W3Techs
                </Link>
              </Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>2019 - 75.9% of sites use JavaScript</Quote>
              <Cite>
                <Link href="http://w3techs.com/technologies/history_overview/javascript_library/all/y">
                  W3Techs
                </Link>
              </Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} textColor="tertiary">
              Google Trends
            </Heading>
            <Layout>
              <Image
                src={images.googleTrends}
                padding="20px"
                style={{ objectFit: "contain", width: "100%" }}
              />
            </Layout>
            <Layout>
              <Text>
                <Link href="https://trends.google.com/trends/explore?date=today%205-y&geo=US&q=%2Fm%2F012l1vxv,%2Fg%2F11c6w0ddw9,%2Fm%2F02p97,%2Fg%2F11c0vmgx5d,%2Fm%2F0gx25dn">
                  Google Trends (fetched 13th of June, 2019)
                </Link>
              </Text>
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
                <Link href="http://www.modulecounts.com/">
                  modulecounts.com
                </Link>
              </Text>
            </Layout>
          </Slide>

          <Slide
            transition={slideTransition}
            bgImage={images.npmShape}
            align="flex-end flex-end"
          >
            <Layout>
              <Text>
                <Link href="https://anvaka.github.io/allnpmviz3d/">
                  allnpmviz3d by @anvaka
                </Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <Image src={images.dinosaurs} margin="0px auto 40px" width="100%" />
            <Heading size={2} fit textColor="primary" textFont="primary">
              Packages of all shapes and sizes
            </Heading>
          </Slide>

          <Slide
            transition={slideTransition}
            bgImage={images.jumper}
            bgDarken={0.75}
            bgColor="black"
          >
            <BlockQuote>
              <Quote>5146 results for ‘boilerplate’</Quote>
            </BlockQuote>
          </Slide>

          <Slide
            transition={slideTransition}
            bgImage={images.shapeSorter}
            bgDarken={0.75}
            bgColor="black"
          >
            <BlockQuote>
              <Quote>23592 results for ‘framework’</Quote>
            </BlockQuote>
          </Slide>

          <Slide
            transition={slideTransition}
            bgImage={images.tools}
            bgDarken={0.75}
          >
            <BlockQuote>
              <Quote>2878 results for ‘toolkit’</Quote>
            </BlockQuote>
          </Slide>

          <Slide
            transition={slideTransition}
            bgImage={images.legos}
            bgDarken={0.75}
          >
            <BlockQuote>
              <Quote>51697 results for ‘library’</Quote>
            </BlockQuote>
          </Slide>

          <Slide
            transition={slideTransition}
            bgImage={images.components}
            bgDarken={0.75}
          >
            <BlockQuote>
              <Quote>74119 results for ‘component’</Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>
                How many of these packages can be considered mature?
              </Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>
                Based on Futurice, about one third (2014). Maybe less now?
              </Quote>
              <Cite>
                <Link href="https://www.futurice.com/blog/npm-registry-in-numbers/">
                  Futurice
                </Link>
              </Cite>
            </BlockQuote>
          </Slide>

          <Slide
            transition={slideTransition}
            bgImage={images.troll}
            bgDarken={0.85}
          >
            <Heading size={1} fit textColor="primary">
              FUD for Thought
            </Heading>
            <List textColor="primary">
              <Appear>
                <ListItem>
                  Instead of collaborating, do we rather do our own thing?
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>Have we reached peak boilerplate?</ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Does the lifetime of packages keep decreasing?
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  How many of the packages can be considered sustainable (no bus
                  factor of one)?
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Do we need better standards or standard libraries?
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>49% of 126k packages have tests</Quote>
              <Cite>NodeChecker (defunct, 2016)</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>
                138k packages out of 231k have readme, license, and repository
                data
              </Quote>
              <Cite>@scriptjs, 2016</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>
                106k packages out of these 138k have seen action within a year
              </Quote>
              <Cite>@scriptjs, 2016</Cite>
            </BlockQuote>
          </Slide>

          <Slide
            transition={slideTransition}
            bgImage={images.troll}
            bgDarken={0.85}
          >
            <Heading size={1} fit textColor="primary">
              FUD for Thought
            </Heading>
            <List textColor="primary">
              <Appear>
                <ListItem>
                  How many of the million packages are worth using?
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>Did we go quantity over quality?</ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  There used to be a Node Security Project (bought by npm, now{" "}
                  <code>npm audit</code>, where is Node Quality Project?)
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Link href="https://github.com/nodejs/node/issues/3959">
                    There are potential, unresolved licensing issues with Node
                  </Link>
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <Heading fit size={1} textColor="primary">
              Is it too easy to publish?
            </Heading>
            <Image src={images.unique} margin="0px auto 40px" width="100%" />
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <Heading fit size={1} textColor="primary">
              Do we have a single point of failure?
            </Heading>
            <Image
              src={images.guruMeditation}
              margin="40px auto 40px"
              height="219px"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <Heading size={1} fit textColor="primary">
              Maybe not anymore
            </Heading>
            <List textColor="primary">
              <Appear>
                <ListItem>
                  Mirrors by <Link href="http://cnpmjs.org/">cnpm</Link> and{" "}
                  <Link href="https://open-registry.dev">Open-Registry</Link>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Link href="https://about.gitlab.com/2019/05/10/github-adds-package-registry/">
                    GitLab Package Registry
                  </Link>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Link href="https://github.com/features/package-registry">
                    GitHub Package Registry
                  </Link>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Link href="https://github.com/entropic-dev/entropic">
                    Entropic
                  </Link>
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide
            transition={slideTransition}
            bgImage={images.babel}
            bgDarken={0.75}
            bgColor="tertiary"
            textColor="primary"
          >
            <Heading fit size={1} textColor="primary">
              ECMAScript
            </Heading>
            <List textColor="primary">
              <Appear>
                <ListItem>ES5 - 2009</ListItem>
              </Appear>
              <Appear>
                <ListItem>ES6/ES2015 - 20+ new features</ListItem>
              </Appear>
              <Appear>
                <ListItem>ES7/ES2016 - Array.prototype.includes, **</ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  ES7/ES2017-ES2019 - Too many features to mention
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Link href="https://github.com/tc39/ecma262">
                    Current proposals
                  </Link>
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide
            transition={slideTransition}
            bgImage={images.cowboy}
            bgDarken={0.75}
            bgColor="black"
          >
            <BlockQuote>
              <Quote>{"Array(16).join('hero' - 1) + 'Batman';"}</Quote>
            </BlockQuote>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <Image
              src={images.enterprise}
              margin="0px auto 40px"
              height="400px"
            />
            <Heading fit size={2} textColor="primary" textFont="primary">
              JavaScript went Enterprise
            </Heading>
          </Slide>

          <Slide
            transition={slideTransition}
            bgImage={images.flow}
            bgDarken={0.25}
          >
            <Heading size={1}>Flow</Heading>
          </Slide>

          <Slide
            transition={slideTransition}
            bgImage={images.types}
            bgDarken={0.25}
          >
            <Heading size={1}>TypeScript</Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading fit size={2} textColor="tertiary">
              Language popularity in 2015
            </Heading>
            <Layout>
              <Link href="http://redmonk.com/jgovernor/2015/07/31/programming-language-rankings-summer-2015/">
                <Image src={images.redmonk2015} padding="20px" />
              </Link>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading fit size={2} textColor="tertiary">
              Language popularity in 2019
            </Heading>
            <Layout>
              <Link href="https://redmonk.com/sogrady/2019/03/20/language-rankings-1-19/">
                <Image src={images.redmonk2019} padding="20px" />
              </Link>
            </Layout>
          </Slide>

          <Slide
            transition={slideTransition}
            bgImage={images.assembly}
            bgDarken={0.25}
          >
            <Heading size={1}>WebAssembly</Heading>
          </Slide>

          <Slide
            transition={slideTransition}
            bgImage={images.troll}
            bgDarken={0.85}
          >
            <Heading size={1} fit textColor="primary">
              FUD for Thought
            </Heading>
            <List textColor="primary">
              <Appear>
                <ListItem>Does transpiling lead to fragmentation?</ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Do we have enterprise interests against community interests?
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Is it possible development is hype driven, backed by big
                  companies while juxtaposing solutions against each other?
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Will TypeScript encounter the fate of CoffeeScript?
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="black">
            <BlockQuote>
              <Quote>
                {
                  "The future is already here — it's just not very evenly distributed"
                }
              </Quote>
              <Cite>William Gibson</Cite>
            </BlockQuote>
          </Slide>

          <Slide
            transition={slideTransition}
            bgImage={images.tools}
            bgDarken={0.25}
          >
            <iframe
              width="840"
              height="630"
              src="https://www.youtube.com/embed/Y7XW-mewUm8"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading fit size={2} textColor="secondary">
              Juho Vepsäläinen
            </Heading>
            <Link href="https://twitter.com/survivejs">
              <Heading size={2} textColor="primary">
                @SurviveJS
              </Heading>
            </Link>
          </Slide>

          <Slide
            transition={slideTransition}
            bgImage={images.troll}
            bgDarken={0.85}
          >
            <Heading fit size={1} textColor="tertiary">
              Questions?
            </Heading>
          </Slide>

          <Slide transition={slideTransition} textColor="primary">
            <Heading fit size={1} textColor="secondary">
              Image Credits
            </Heading>
            <Markdown>
              {`
* [Wikipedia (CC BY-SA)](https://en.wikipedia.org/wiki/Brendan_Eich#/media/File:Brendan_Eich_Mozilla_Foundation_official_photo.jpg), [Wikipedia (CC BY-SA)](https://en.wikipedia.org/wiki/File:Largestdinosaursbysuborder_scale.png)
* [Andy (CC BY)](https://www.flickr.com/photos/ellasdad/425813314), [Meghana Kulkarni (CC BY-NC)](https://www.flickr.com/photos/17178266@N00/4334202250/)
* [estefania17 (PD)](https://pixabay.com/en/lego-blocks-bricks-toy-game-252602/), [Kae (PD)](https://commons.wikimedia.org/wiki/File:Componentes.JPG)
* [elijay (PD)](https://pixabay.com/en/cowboy-horse-dog-pasture-western-1130695/), [skeeze (PD)](https://pixabay.com/en/leonard-nimoy-william-shatner-393861/)
* [stevepb (PD)](https://pixabay.com/en/honey-sweet-syrup-organic-golden-1006972/), [Unsplash (PD)](https://pixabay.com/en/typewriter-book-notebook-paper-801921/)
* [Efraimstochter (PD)](https://pixabay.com/en/wheels-machine-installation-art-784865/)
              `}
            </Markdown>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
