let replaceSpaceWithInFileName = " ";

class File {
  constructor(options) {
    if (options.Name && options.Type) {
      this.Name = options.Name;
      this.Type = options.Type;
      this.Data = options.Data;
    } else if (options.FileName && options.Data) {
      let FileNameSplit = options.FileName.replace(
        /\s+/g,
        replaceSpaceWithInFileName
      )
        .trim()
        .split(".");

      console.log(FileNameSplit);
      this.Type = FileNameSplit[FileNameSplit.length - 1];

      let NameSplit = FileNameSplit;
      NameSplit.splice(-1, 1);

      this.Name = NameSplit.join(".");

      this.Data = options.Data;
    } else {
      throw new Error("improper arguments to File constructor");
    }
  }
}

/*
let blob1 = new Blob(["lkjhg"], { type: "text/plain" });
let File1 = new File({ FileName: "lds.js", Data: "djdk" });

console.log(File1);
console.log(blob1);
*/
