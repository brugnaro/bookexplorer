import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        let alternate = 'https://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiv8c3jvoLTAhXGEJAKHfOhDsAQjRwIBw&url=http%3A%2F%2Fwww.freeiconspng.com%2Ficons%2Fbook-icon&psig=AFQjCNGsl_It4taXSTamMOTZOOn26FyA4Q&ust=1491109736116614';
        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        let {title, imageLinks, infoLink} = item.volumeInfo;
                        return(
                            <a 
                                key={index} 
                                className="book"
                                href={infoLink}
                                target="_blank"
                                >
                                <img 
                                    src={imageLinks !== undefined ? imageLinks.thumbnail: alternate} 
                                    alt="book image"
                                    className="book-img"
                                />
                                <div className="book-text">
                                    {title}
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}
export default Gallery;