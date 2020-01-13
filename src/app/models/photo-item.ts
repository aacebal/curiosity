import { Rover, Camera } from './rover'

export class PhotoItem {
    id: number
    sol: number
    camera: Camera;
    img_src: string;
    earth_date: string;
    rover: Rover
}