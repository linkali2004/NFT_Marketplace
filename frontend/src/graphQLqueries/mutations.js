import {gql} from "@apollo/client";
export const GET_NFTS_OWNED_BY_USER = gql`
{
    nfts(where:{to:"0xc7C4b8e870F3029CbfbCED51178eD430c940E4e1"}) {
      id
      from
      to
      tokenURI
    }
  }
`

export const GET_LISTED_NFTS =  gql`
{
    nfts(where:{to:"0xcA11282800C8757e86e869e772692899D87444D8"}) {
      id
      from
      to
      price
    }
  }
`