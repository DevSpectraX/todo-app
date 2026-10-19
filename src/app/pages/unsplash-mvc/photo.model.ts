import { UnsplashPhotoInterface } from "../../core/interface/unplash-photo.interface";

export class PhotoModel{
    //Como el state pero sin reactividad (no signal ni observable)

    //Modelo es solo para los datos que quiero mostrar

    private photos: UnsplashPhotoInterface[][] = [];
    
    setPhotos(photos: UnsplashPhotoInterface[][]){

        this.photos = photos;
    }

    getPhotos(){
        return this.photos;
    }

    removePhoto(){
        this.photos[0] = this.photos[0].slice(0, 1);
    }

}