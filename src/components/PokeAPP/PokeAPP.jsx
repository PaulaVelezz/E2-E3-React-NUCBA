import React, { useEffect, useState } from 'react';
import axios from "axios";
import Spinner from './Spinner';

import {
        CardContainerStyle,
        CardStyle,
        SearchBtnStyle, 
        TypeContainer,
        TypeContentStyle,
        NameContainer,
        ImgContentStyle,
} from "./PokeAPPstyles"; 


const PokeAPP = () => {

    const [name, setName] = useState("");
    const [Img, setImg] = useState("");
    const [Type, setType] = useState("");
    const [Find, setFind] = useState("pikachu");
    const [disName, setdisName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect (()=> {
        async function getData() {

            try {
                let searchQuery = Find.toLowerCase().trim();
                setLoading(true);
                setError(false);

                let res = await axios.get(
                  `https://pokeapi.co/api/v2/pokemon/${searchQuery}`
                );

                setImg(res.data.sprites.front_default);
                setType(res.data.types[0].type.name);
                setdisName(Find);
                setLoading(false);

            } catch (error) {
                setLoading(false);
                setError(alert("El pokemon que ingresaste no se encuentra, proba buscando otro."));
            }
        }
        getData();
    }, [Find]);

    const Typename = (event) => {
        setName(event.target.value);
      };
    
      const Search = () => {
        if (name !== "") setFind(name);
        setName("");
    };

  return (
    <>
      <CardContainerStyle>
        <CardStyle>
            <ImgContentStyle>
              <img src= {Img} alt="" />
            </ImgContentStyle>
            
            <NameContainer>
              {disName.toUpperCase()}
            </NameContainer>

            <TypeContentStyle>
              {Type}
            </TypeContentStyle>

            <TypeContainer onChange={Typename} value={name} placeholder='Nombre Pokemon'></TypeContainer>

            <SearchBtnStyle onClick={Search}>
              Buscar 
            </SearchBtnStyle>
        </CardStyle>
      </CardContainerStyle>
      {loading && <div id="cover-spin"> <Spinner /></div> }
      </>
  );
}

export default PokeAPP;