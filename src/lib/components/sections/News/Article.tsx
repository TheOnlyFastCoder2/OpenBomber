import styled from "styled-components";

import { Img } from "lib/ui/Img";
import { H5 } from "lib/ui/H5";
import { PRegular } from "lib/ui/PRegular";
import { ALink } from "lib/ui/ALink";

interface IProps {
  url: string,
  href: string,
  topic: string,
  children: string,
}

export default function ({url, href, topic, children}:IProps) {
  return (
    <Article className="Article">
      <Img url={url}/>
      <H5>{topic}</H5>
      <PRegular>{children}</PRegular>
      <ALink href={href}>Read</ALink>
    </Article>
  )
}

const Article = styled.div`
  .Img {
    width: 100%;
    aspect-ratio:3/2;
    margin-bottom: 10px;
  }

  .PRegular {
    margin-top: var(--p);
    margin-bottom: calc(var(--p) + 2px);
  }
`;