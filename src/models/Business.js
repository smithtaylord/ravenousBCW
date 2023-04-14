export class Business {
    constructor(data) {
        this.id = data.id,
            this.imageSrc = data.image_url,
            this.name = data.name,
            this.address = data.location.address1,
            this.city = data.location.city,
            this.state = data.location.state,
            this.zipCode = data.location.zip_code,
            this.category = data.categories[0].title,
            this.rating = data.rating,
            this.reviewCount = data.review_count
    }
}