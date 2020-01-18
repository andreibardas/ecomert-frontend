import React from "react";

//import SHOP_DATA from "./shop.data";
import "../../components/collection-preview/collection-preview.component";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import Dulciuri1 from "../../Images/Dulciuri/dulciuri1_raffaello.jpg";
import Dulciuri2 from "../../Images/Dulciuri/dulciuri2_7days.jpg";
import Dulciuri3 from "../../Images/Dulciuri/dulciuri3_mini7days.jpg";
import Dulciuri4 from "../../Images/Dulciuri/dulciuri4_nutellabready.jpg";
import Dulciuri5 from "../../Images/Dulciuri/dulciuri5_kindersurprise.jpg";
import Dulciuri6 from "../../Images/Dulciuri/dulciuri6_kinderbueno.jpg";
import Dulciuri7 from "../../Images/Dulciuri/dulciuri7_kinderdelice.jpg";

import Snacks1 from "../../Images/Snacks/snacks1_fistic.jpg";
import Snacks2 from "../../Images/Snacks/snacks2_alune.jpg";
import Snacks3 from "../../Images/Snacks/snacks3_porumb.jpg";
import Snacks4 from "../../Images/Snacks/snacks4_pringles.jpg";
import Snacks5 from "../../Images/Snacks/snacks5_tuc.jpg";
import Snacks6 from "../../Images/Snacks/snacks6_bakerollssare.jpg";
import Snacks7 from "../../Images/Snacks/snacks7_laysbakedsare.jpg";
import Snacks8 from "../../Images/Snacks/snacks8_laysmaxsare.jpg";

import Cafea1 from "../../Images/Cafea/cafea1_illy.jpg";
import Cafea2 from "../../Images/Cafea/cafea2_pellinitop.jpg";
import Cafea3 from "../../Images/Cafea/cafea3_lavazzadoro.jpg";

import Bere1 from "../../Images/Bere/bere1_corona.jpg";
import Bere2 from "../../Images/Bere/bere2_desperados.jpg";
import Bere3 from "../../Images/Bere/bere3_efes.jpg";
import Bere4 from "../../Images/Bere/bere4_strongbowrosusticla.jpg";
import Bere5 from "../../Images/Bere/bere5_peronidoza.jpg";
import Bere6 from "../../Images/Bere/bere6_stelladoza.jpg";

import Alcool1 from "../../Images/Alcool/alcool1_jack.jpg";
import Alcool2 from "../../Images/Alcool/alcool2_jagermeister.jpg";
import Alcool3 from "../../Images/Alcool/alcool3_absolut.jpg";
import Alcool4 from "../../Images/Alcool/alcool4_beciuldomnesc.jpg";
import Alcool5 from "../../Images/Alcool/alcool5_alexandrion.jpg";
import Alcool6 from "../../Images/Alcool/alcool6_jidveidrymuscat.jpg";
import Alcool7 from "../../Images/Alcool/alcool7_jidveiclasic.jpg";

import Tutun1 from "../../Images/Tutun/tutun1_neostickalbastru.jpg";
import Tutun2 from "../../Images/Tutun/tutun2_dunhillalbastru.jpg";
import Tutun3 from "../../Images/Tutun/tutun3_marlbororosu.jpg";
import Tutun4 from "../../Images/Tutun/tutun4_davidoffrosu.jpg";
import Tutun5 from "../../Images/Tutun/tutun5_heetsbronz.jpg";
import Tutun6 from "../../Images/Tutun/tutun6_heetsportocaliu.jpg";

import Apa1 from "../../Images/Apa/apa1_borsecplat05.jpg";
import Apa2 from "../../Images/Apa/apa2_borsecmineral05.jpg";
import Apa3 from "../../Images/Apa/apa3_aquaplat05.jpg";
import Apa4 from "../../Images/Apa/apa4_aquamineral05.jpg";
import Apa5 from "../../Images/Apa/apa5_dornaplat05.jpg";

import Suc1 from "../../Images/Suc/suc1_cola05.jpg";
import Suc2 from "../../Images/Suc/suc2_fuseteapiersici05.jpg";
import Suc3 from "../../Images/Suc/suc3_fuseteafructe05.jpg";
import Suc4 from "../../Images/Suc/suc4_schweppestonic05.jpg";
import Suc5 from "../../Images/Suc/suc5_schweppesbitter05.jpg";
import Suc6 from "../../Images/Suc/suc6_cappylemonadelamaie.jpg";
import Suc7 from "../../Images/Suc/suc7_monsterverde.jpg";
import Suc8 from "../../Images/Suc/suc8_coladoza.jpg";
import Suc9 from "../../Images/Suc/suc9_redbull.jpg";




class ShopPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            collections: [
                {
                    id: 1,
                    title: 'Dulciuri',
                    routeName: 'dulciuri',
                    items: [
                        {
                            id: 1,
                            name: "Raffaello",
                            imageUrl: Dulciuri1,
                            price: 25
                        },
                        {
                            id: 2,
                            name: '7 Days',
                            imageUrl: Dulciuri2,
                            price: 18
                        },
                        {
                            id: 3,
                            name: 'Mini 7 Days',
                            imageUrl: Dulciuri3,
                            price: 35
                        },
                        {
                            id: 4,
                            name: 'Nutella B-Ready',
                            imageUrl: Dulciuri4,
                            price: 25
                        },
                        {
                            id: 5,
                            name: 'Kinder Surprise',
                            imageUrl: Dulciuri5,
                            price: 18
                        },
                        {
                            id: 6,
                            name: 'Kinder Bueno',
                            imageUrl: Dulciuri6,
                            price: 14
                        },
                        {
                            id: 7,
                            name: 'Kinder Delice',
                            imageUrl: Dulciuri7,
                            price: 18
                        },
                        {
                            id: 8,
                            name: 'Wolf Cap',
                            imageUrl: '',
                            price: 14
                        },
                        {
                            id: 9,
                            name: 'Blue Snapback',
                            imageUrl: '',
                            price: 16
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'Aperitive Sarate',
                    routeName: 'snacks',
                    items: [
                        {
                            id: 1,
                            name: 'Fistic',
                            imageUrl: Snacks1,
                            price: 220
                        },
                        {
                            id: 2,
                            name: 'Alune',
                            imageUrl: Snacks2,
                            price: 280
                        },
                        {
                            id: 3,
                            name: 'Porumb',
                            imageUrl: Snacks3,
                            price: 110
                        },
                        {
                            id: 4,
                            name: 'Pringles',
                            imageUrl: Snacks4,
                            price: 160
                        },
                        {
                            id: 5,
                            name: 'Tuc Sare',
                            imageUrl: Snacks5,
                            price: 160
                        },
                        {
                            id: 6,
                            name: 'Bake Rolls Sare',
                            imageUrl: Snacks6,
                            price: 160
                        },
                        {
                            id: 7,
                            name: 'Lays Baked Sare',
                            imageUrl: Snacks7,
                            price: 190
                        },
                        {
                            id: 8,
                            name: 'Lays Maxx Sare',
                            imageUrl: Snacks8,
                            price: 200
                        }
                    ]
                },
                {
                    id: 3,
                    title: 'Cafea Si Ceai',
                    routeName: 'cafea',
                    items: [
                        {
                            id: 1,
                            name: 'Illy',
                            imageUrl: Cafea1,
                            price: 125
                        },
                        {
                            id: 2,
                            name: 'Pellini TOP',
                            imageUrl: Cafea2,
                            price: 90
                        },
                        {
                            id: 3,
                            name: 'Lavazza D-Oro',
                            imageUrl: Cafea3,
                            price: 90
                        },
                        {
                            id: 4,
                            name: '',
                            imageUrl: "",
                            price: 165
                        },
                        {
                            id: 5,
                            name: '',
                            imageUrl: "",
                            price: 185
                        }
                    ]
                },
                {
                    id: 4,
                    title: 'Bere',
                    routeName: 'bere',
                    items: [
                        {
                            id: 1,
                            name: 'Corona',
                            imageUrl: Bere1,
                            price: 25
                        },
                        {
                            id: 2,
                            name: 'Desperados',
                            imageUrl: Bere2,
                            price: 20
                        },
                        {
                            id: 3,
                            name: 'Effes',
                            imageUrl: Bere3,
                            price: 80
                        },
                        {
                            id: 4,
                            name: 'Strongbow Rosu Sticla',
                            imageUrl: Bere4,
                            price: 80
                        },
                        {
                            id: 5,
                            name: 'Peroni Doza',
                            imageUrl: Bere5,
                            price: 45
                        },
                        {
                            id: 6,
                            name: 'Stella Doza',
                            imageUrl: Bere6,
                            price: 135
                        },
                        {
                            id: 7,
                            name: '',
                            imageUrl: '',
                            price: 20
                        }
                    ]
                },
                {
                    id: 5,
                    title: 'Alcool',
                    routeName: 'alcool',
                    items: [
                        {
                            id: 1,
                            name: 'Jack Daniels',
                            imageUrl: Alcool1,
                            price: 325
                        },
                        {
                            id: 2,
                            name: "Jagermeister",
                            imageUrl: Alcool2,
                            price: 20
                        },
                        {
                            id: 3,
                            name: 'Absolut',
                            imageUrl: Alcool3,
                            price: 25
                        },
                        {
                            id: 4,
                            name: 'Beciul Domnesc Demisec',
                            imageUrl: Alcool4,
                            price: 25
                        },
                        {
                            id: 5,
                            name: 'Alexandrion 500ml',
                            imageUrl: Alcool5,
                            price: 40
                        },
                        {
                            id: 6,
                            name: 'Jidvei Dry Muscat',
                            imageUrl: Alcool6,
                            price: 25
                        },
                        {
                            id: 7,
                            name: 'Jidvei Clasic',
                            imageUrl: Alcool7,
                            price: 25
                        }
                    ]
                },
                {
                    id: 6,
                    title: 'Tutun',
                    routeName: 'tutun',
                    items: [
                        {
                            id: 1,
                            name: 'Glo NeoStick Albastru',
                            imageUrl: Tutun1,
                            price: 325
                        },
                        {
                            id: 2,
                            name: 'Dunhill Albastru',
                            imageUrl: Tutun2,
                            price: 20
                        },
                        {
                            id: 3,
                            name: 'Marlboro Rosu Scurt',
                            imageUrl: Tutun3,
                            price: 25
                        },
                        {
                            id: 4,
                            name: 'Davidoff Rosu',
                            imageUrl: Tutun4,
                            price: 25
                        },
                        {
                            id: 5,
                            name: 'Heets Bronze',
                            imageUrl: Tutun5,
                            price: 40
                        },
                        {
                            id: 6,
                            name: 'Heets Portocaliu',
                            imageUrl: Tutun6,
                            price: 25
                        }
                    ]
                },
                {
                    id: 7,
                    title: 'Apa',
                    routeName: 'apa',
                    items: [
                        {
                            id: 1,
                            name: 'Borsec Plata 500ml',
                            imageUrl: Apa1,
                            price: 325
                        },
                        {
                            id: 2,
                            name: 'Borsec Minerala 500ml',
                            imageUrl: Apa2,
                            price: 20
                        },
                        {
                            id: 3,
                            name: 'Aqua Plata 500ml',
                            imageUrl: Apa3,
                            price: 25
                        },
                        {
                            id: 4,
                            name: 'Aqua Minerala 500ml',
                            imageUrl: Apa4,
                            price: 25
                        },
                        {
                            id: 5,
                            name: 'Dorna Plata 500ml',
                            imageUrl: Apa5,
                            price: 40
                        },
                        {
                            id: 6,
                            name: '',
                            imageUrl: '',
                            price: 25
                        }
                    ]
                },
                {
                    id: 8,
                    title: 'Suc',
                    routeName: 'suc',
                    items: [
                        {
                            id: 1,
                            name: 'Coca-Cola 500ml',
                            imageUrl: Suc1,
                            price: 325
                        },
                        {
                            id: 2,
                            name: 'Fuse Tea Piersici 500ml',
                            imageUrl: Suc2,
                            price: 20
                        },
                        {
                            id: 3,
                            name: 'FuseTea Fructe de Padure 500ml',
                            imageUrl: Suc3,
                            price: 25
                        },
                        {
                            id: 4,
                            name: 'Schweppes Tonic 500ml',
                            imageUrl: Suc4,
                            price: 25
                        },
                        {
                            id: 5,
                            name: 'Schweppes BitterLemon 500ml',
                            imageUrl: Suc5,
                            price: 40
                        },
                        {
                            id: 6,
                            name: 'Cappy Lemonade Lamaie 300ml',
                            imageUrl: Suc6,
                            price: 25
                        },
                        {
                            id: 7,
                            name: 'Monster Verde',
                            imageUrl: Suc7,
                            price: 25
                        },
                        {
                            id: 8,
                            name: 'Coca-Cola Doza',
                            imageUrl: Suc8,
                            price: 25
                        },
                        {
                            id: 9,
                            name: 'RedBull',
                            imageUrl: Suc9,
                            price: 25
                        }
                    ]
                }

            ]
        }
    }

    render() {
        const {collections} = this.state;
        return(<div className="shop-page">
            {
                collections.map(({id, title, routeName, items}) => (
                    <CollectionPreview key={id} title={title} routeName={routeName} items={items}/>
                ))
            }
            </div>);
    }
}

export default ShopPage;