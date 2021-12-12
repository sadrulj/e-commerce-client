import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { mobile } from "../responsive"

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopBottom = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    Background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`
const TopTexts = styled.div`
${mobile({ display: "none" })}
`
const TopText = styled.div`
    text-decoration: underline;
    cursor: pionter;
    margin: 0 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`
const ProductDetail = styled.div`
flex: 2;
display:flex;
`
const Image = styled.img`
width: 200px;
`
const Details = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: space-around;
    ${mobile({ padding: "10px" })}
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border: 2px solid gray;
    border-radius:50%;
    background-color: ${props => props.color}
`
const ProductSize = styled.span``

const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
${mobile({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", margin: "10px 0px" })}
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    ${mobile({ marginBottom: "0px" })}
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 0px 5px;
    ${mobile({ margin: "0px 15px" })}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ fontSize: "24px" })}
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    margin: 10px 0px;
    ${mobile({ margin: "5px 0px" })}
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
    ${mobile({ margin: "15px 0px" })}
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight:${props => props.type === "total" && "500"};
    font-size:${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: teal;
    color: white;
    font-weight: 600;
`

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopBottom>CONTINUE SHOPPING</TopBottom>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopBottom type="filled">CHECKOUT NOW</TopBottom>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://cdn.shopify.com/s/files/1/0352/5133/products/21_01_07TaneishaStudio7114_540x.jpg?v=1614961389" />
                                <Details>
                                    <ProductName><b>Product:</b> HAKURA T-SHIRT</ProductName>
                                    <ProductId><b>Id:</b> 231090</ProductId>
                                    <ProductColor color="salmon" />
                                    <ProductSize><b>Size:</b> L</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove />
                                    <ProductAmount>2</ProductAmount>
                                    <Add />
                                </ProductAmountContainer>
                                <ProductPrice>$ 20</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="https://cdn.shopify.com/s/files/1/0352/5133/products/20_09_10NatStudio19968_540x.jpg?v=1614961526" />
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                    <ProductId><b>Id:</b> 231090</ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Size:</b> M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove />
                                    <ProductAmount>2</ProductAmount>
                                    <Add />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 50.00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ 0.00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 55.00</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
