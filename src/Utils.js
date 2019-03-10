import music from './music.png';

export const getTrack = (state, isLeft) =>
state.tracks[isLeft ? 'left': 'right'];

export const formatTrackLength = (length) => {   
    var secondsLength = length/1000; 

    const minutes = parseInt(secondsLength / 60, 10);
    const onlySeconds = secondsLength % 60;

    const seconds = onlySeconds.toFixed(2);
    const properSeconds = parseInt(seconds * 100).toString().padStart(2,0);

     
    return minutes+":"+ properSeconds;
};

export const getPicture = (picture) => {
    if(!picture)
        return music;

    const byteArray = new Uint8Array(picture.data);
    const oMyBlob = new Blob(
        [byteArray], 
        {type : picture.format }
    );
    const url = URL.createObjectURL(oMyBlob);

    return url;
}