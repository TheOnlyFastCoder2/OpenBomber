import { ALink } from "lib/ui/ALink";
import { PRegular } from "lib/ui/PRegular";
import { TopicSection } from "lib/ui/TopicSection";
import styled from "styled-components";
import Article from "./Article";

import IMGBackground from 'assets/background.png';
import IMGArticle_1 from 'assets/imgs/news/article_1.png';
import IMGArticle_2 from 'assets/imgs/news/article_2.png';
import IMGArticle_3 from 'assets/imgs/news/article_3.png';

export default function () {
  return (
    <News className="Section __border">
        <TopicSection>News</TopicSection>
        <PRegular>
          <p>
            In "OpenBomber" you move around the map, place bombs and collect bonuses. 
            Victory is achieved when you destroy all the other players on the map. 
            The game restarts if there are less than two players left on the map
          </p>
          <ALink>All News</ALink>
        </PRegular>
        <div className="news">
            <Article
              href=""
              topic="Protects the player from 1 explosion" 
              url={IMGArticle_1}>
              Protects the player from 1 explosion. Issued for 50 seconds. 
              Time adds up to the previous ones. 
              Disappears immediately after protecting the player from the explosion. 
              Doesn't save for new games
            </Article>
            <Article
              href=""
              topic="Protects the player from 1 explosion" 
              url={IMGArticle_2}>
                Protects the player from 1 explosion. 
                Issued for 50 seconds. 
                Time adds up to the previous ones. 
                Disappears immediately after protecting the player from the explosion. 
                Doesn't save for new games
            </Article>
            <Article
              href=""
              topic="Protects the player from 1 explosion" 
              url={IMGArticle_3}>
              Protects the player from 1 explosion. Issued for 50 seconds. 
              Time adds up to the previous ones. 
              Disappears immediately after protecting the player from the explosion. 
              Doesn't save for new games
            </Article>
        </div>
    </News>
  )
}

const News = styled.div`
  
  grid-template-areas: 
    "a b"
    "c c"
  ;
  
  .news {
    grid-area: c;
    grid-template-columns: repeat(3, 1fr);
    display:grid;
    gap: 3px;
    background-color: rgb(var(--gray-100));
    .Article {
      padding: var(--p);
      padding-bottom: calc(var(--p) * 2);
      background-image: url(${IMGBackground});
    }

    @media (max-width: 1024px){
      grid-template-columns: repeat(2,1fr);
      .Article:nth-child(3) {
        display: none;
      }
    }

    @media (max-width: 640px){
      grid-template-columns: repeat(1, 1fr);
      .Article:nth-child(3) {
        display: block;
      }
    }
  }
`;