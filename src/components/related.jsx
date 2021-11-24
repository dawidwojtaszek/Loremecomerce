import React from "react";
import { Title } from "../style/elements/title";
import RelatedSection from "../style/related";
import ProductCard from './productCard';
import { useSelector } from "react-redux";

const Related = ({ category, id }) => {

    const items = useSelector(state => state.items.items).filter(item => item.category === category).filter(item => item.id !== id).slice(0, 4);
    console.log(items);
    return (
        <RelatedSection>
            <Title>You Might Also Like</Title>
            <RelatedSection.ProductsBox>
                {
                    items.map(item => (
                        <ProductCard key={item.id} name={item.name} category={item.category} price={item.price} imgUrl={item.imgUrl} tag={item.tag} id={item.id} />
                    ))
                }
            </RelatedSection.ProductsBox>
        </RelatedSection>
    )
}

export default Related;