import { useState, useEffect } from 'react';

import Card from './card.jsx';

const Cards = ({data}) => {
    const [dataList, setDataList] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const startIndex = Math.floor(Math.random() * data.length);
      const selectedCards = [];

      for (let i = 0; i < 9; i++) {
        const index = (startIndex + i) % data.length;
        selectedCards.push({
          image: data[index].image || data[index]["Foto 1"],
          title: data[index].title || data[index]["Nombre"],
          description: data[index].streetAddress || data[index]["Dirección"],
          link: data[index].uri || data[index]["URL Real"]
        });
      }

      setDataList(selectedCards);
    }
  }, [data]);

  return (
    <div className="cards-container">
      {dataList.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          link={item.link}
        />
      ))}
    </div>
  );
}

export default Cards;