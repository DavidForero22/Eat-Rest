import { useState, useEffect } from 'react';

import Card from './card.jsx';

const RowCards = ({data, title}) => {
    const [imgs, setImgs] = useState([]);
    const [titles, setTitles] = useState([]);
    const [descriptions, setDescs] = useState([]);
    const [links, setLinks] = useState([]);

    useEffect(() => {
        if (data && data.length > 0) {
            const startIndex = Math.floor(Math.random() * data.length);
            const tempImgs  = [];
            const tempTitles = [];
            const tempDescs = [];
            const tempLinks = [];

            for (let i = 0; i < 4; i++) {           
                const index = (startIndex + i) % data.length;   

                tempImgs.push(data[index].image || data[index]["Foto 1"]);
                tempTitles.push(data[index].title || data[index]["Nombre"]);
                tempDescs.push(data[index].streetAddress || data[index]["Dirección"]);
                tempLinks.push(data[index].uri || data[index]["URL Real"]);
                console.log(data[index]);
            }

            setImgs(tempImgs);
            setTitles(tempTitles);
            setDescs(tempDescs);
            setLinks(tempLinks);
        }
    }, [data]);

    return (
        <div>   
            <h2>{title}</h2>
            <div className='best-rated-row'>
                <Card image={imgs[0]} title={titles[0]} description={descriptions[0]} link={links[0]} />
                <Card image={imgs[1]} title={titles[1]} description={descriptions[1]} link={links[1]} />
                <Card image={imgs[2]} title={titles[2]} description={descriptions[2]} link={links[2]} />
                <Card image={imgs[3]} title={titles[3]} description={descriptions[3]} link={links[3]} />
            </div>
        </div>
    )
}

export default RowCards;