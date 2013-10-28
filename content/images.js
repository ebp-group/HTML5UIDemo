var imgNames = ["Gebäude", "Berg", "Pflanze", "Vulkan", "Urwald", "Strand", "Tiere", "Portrait", "Reisfeld", "Wüste"], 
fileNames = ["file1.jpg", "file2.png", "file3.png", "file4.png", "file5.gif", "test6.png", "testdatei7.png", "bild8.png", "datei9.jpg", "test10.gif"], 
editors = ["Meier Hans", "Kunz Peter", "Müller Herbert", "Gerber Sandra", "Keller Maria", "Brunner Andrea", "Kalt Fabian", "Hinz Albert", "Sauter Ernst", "Häberli Jürg"], 
sizes = ["1024x768", "800x600", "1280x800", "1600x1200"],
createDates = [new Date("2010/12/08"), new Date("2008/02/19"), new Date("2012/08/30"), new Date("2013/09/19"), new Date("2002/03/04"), new Date("2005/07/02"), new Date("2005/05/29"), new Date("2009/01/09"), new Date("2013/01/27"), new Date("2013/03/27")]; 

function createRandomData(count) { 
	var data = [], now = new Date(); 
	for (var i = 0; i < count; i++) { 
			var imgName = imgNames[Math.floor(Math.random() * imgNames.length)] +" mit "+ imgNames[Math.floor(Math.random() * imgNames.length)], 
			fileName = fileNames[Math.floor(Math.random() * fileNames.length)], 
			editor = editors[Math.floor(Math.random() * editors.length)], 
			createDate = createDates[Math.floor(Math.random() * createDates.length)];
			size = sizes[Math.floor(Math.random() * sizes.length)];
			licensefee =  Math.floor(Math.random() * 100);

			data.push({ Id: i + 1, ImgName: imgName, FileName: fileName, Editor: editor, CreateDate: createDate, Size: size, Licensefee: licensefee }); 
		} 
	return data; 
} 
