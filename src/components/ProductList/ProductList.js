import React from "react"

class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            productList: [
                {
                    categoria:"Mercado",
                    nome:"BIG",
                    logo:"https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/202007211642_fbd1ced2-4320-4ffa-bdbe-2a32f0f35923.png"
                },
                {
                    categoria:"Restaurate",
                    nome:"COCO",
                    logo:"https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/201804201419_c9c81038-5973-40be-aeed-35c135f7cf88.jpg"
                },
                {
                    categoria:"Doceria",
                    nome:"DuDolce",
                    logo:"https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/0cb76615-73bf-4c71-80ea-abdee77f7a78/202004160050_CIY3_i.jpg"
                },

            ]
        }
    }
    componentDidMount(){
        setInterval( () => {
            let products = this.state.productList;
            products.push({
                categoria:"Cervejaria",
                nome:"fastBeer",
                logo:"https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/0cb76615-73bf-4c71-80ea-abdee77f7a78/202004160050_CIY3_i.jpg"
            })
    
            this.setState({
                productList : products
            })
        }, 2000)
    }
    render(){
        return(
            <div>
                {
                    this.state.productList.map( (value, index)=> {
                        return (
                            <div>
                                <img src={value.logo}/>
                                <h2>{value.nome}</h2>
                                <p>{value.categoria}</p>

                            </div>
                        )
                    })
                }
            </div>
           
        )
    }
}

export default ProductList