let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
     
        center: [55.747078, 37.607194],
    
        zoom: 14,
        controls:[]
    });

    const coords = [
        [55.749228, 37.606451]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: './img/mapcorrect.png',

        draggable: false,
        iconImageSize: [58, 73],
        iconImageOffset: [-3, -42]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');

}

ymaps.ready(init);