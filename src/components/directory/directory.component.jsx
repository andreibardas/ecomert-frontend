import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import Alcool from "../../Images/alcool.jpg";
import Apa from "../../Images/apa.jpg";
import Bere from "../../Images/bere.jpg";
import Cafea from "../../Images/cafea.jpg";
import Dulciuri from "../../Images/dulciuri.jpg";
import Snacks from "../../Images/snacks.jpg";
import Suc from "../../Images/suc.jpg";
import Tutun from "../../Images/tutun.jpg";

class Directory extends React.Component{
    constructor() {
        super();

        this.state ={
            sections:[
                {
                    title: "Dulciuri",
                    id: 1,
                    image: Dulciuri
                },
                {
                    title: "Aperitive Sarate",
                    id: 2,
                    image: Snacks
                },
                {
                    title: "Cafea si Ceai",
                    id: 3,
                    image: Cafea
                },
                {
                    title: "Bere si Cidru",
                    id: 4,
                    image: Bere
                },
                {
                    title: "Bauturi Alcoolice",
                    id: 5,
                    image: Alcool
                },
                {
                    title: "Tutun",
                    id: 6,
                    image: Tutun
                },
                {
                    title: "Apa",
                    id: 7,
                    image: Apa
                },
                {
                    title: "Sucuri",
                    id: 8,
                    image: Suc
                }
                ]
        }
    }

    render(){
        return(
            <div className="directory-menu">{
                this.state.sections.map(({ title, id, image }) => (
                    <MenuItem key={id} title={title} image={image} />
                ))
            }

            </div>
        );


    }
}

export default Directory;