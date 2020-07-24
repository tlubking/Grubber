const apiKey = '2GehxL94WTfDPLwCNsjqyYCnqIcbKPBa7unTb-Ux7jYmbkosfu3HFHI0BBxuBeeib50vMzKX_3KJ0uphAdDfJHPg4gd2f8xKhJkfsD38EpHL5zmWuJ17orj8Tt9EXnYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then((response) => {
            return response.json();
        }).then(jsonResponse => {
            console.log(jsonResponse);
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business => ({
                       id: business.id,
                       imageSrc: business.image_url,
                       name: business.name,
                       address: business.location.address1,
                       city: business.location.city,
                       state: business.location.state,
                       zipCode: business.location.zip_code,
                       category: business.categories[0].title,
                       rating: business.rating,
                       reviewCount: business.review_count,
                       url: business.url
                    }));
                }
            return [];
            }
        );
    }
};

export default Yelp;
