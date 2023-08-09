interface takePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}
//InterFaces Are There to make sure When Used Certain properties are Applied...
//We Can Add more But No Less

class Instagram implements takePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
  ) {
    this.cameraMode = "Front";
  }
}

interface Story{
  createStory():void
}

class Youtube implements takePhoto , Story{
  constructor(

    public cameraMode: string,
    public filter: string,
    public burst: number,
  ){}
  createStory():void{
    console.log("Hello Story..")
  }
}
