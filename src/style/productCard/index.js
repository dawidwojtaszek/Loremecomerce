import styled from "styled-components";
import { Btn } from './btn';
import { Name, Category, Price, PriceTag, Info, PriceBox } from './info'
import { Image, ImageBox, Tag, WishlistBtn, QuickView } from "./image";

const Card = styled.div`
    margin-top: 2rem;
    min-width: 310px;
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 7px 16px 25px 1px rgba(197, 197, 197, 1);
    -moz-box-shadow: 7px 16px 25px 1px rgba(197, 197, 197, 1);
    box-shadow: 7px 16px 25px 1px rgba(197, 197, 197, 1);
`
Card.Btn = Btn;
Card.Name = Name;
Card.Category = Category;
Card.Price = Price;
Card.PriceTag = PriceTag;
Card.Info = Info;
Card.PriceBox = PriceBox;
Card.Image = Image;
Card.ImageBox = ImageBox;
Card.Tag = Tag;
Card.WishlistBtn = WishlistBtn;
Card.QuickView = QuickView;

export default Card;
