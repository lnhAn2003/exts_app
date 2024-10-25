// File System (fs) là một module tích hợp sẵn cung cấp các chức năng để làm việc với tệp và thư mục. 
//Nó cho phép đọc, ghi, tạo, xóa, và thay đổi tên tệp hoặc thư mục trên hệ thống tệp. 
//Module này rất mạnh mẽ và hữu ích khi bạn cần xử lý dữ liệu tệp trong các ứng dụng Node.js.

//Module fs cung cấp các hàm xử lý tệp theo hai cách:
    //Đồng bộ (Synchronous): Các hàm sẽ chặn luồng chính cho đến khi hoàn thành tác vụ.
    //Bất đồng bộ (Asynchronous): Các hàm không chặn luồng chính và sử dụng callback hoặc Promise.

//Sử dụng fs.appendFile() để thêm nội dung vào cuối tệp.
{
    fs.appendFile('output.txt', '\nThêm dòng này vào cuối tệp.', (err) => {
        if (err) {
          console.error('Đã xảy ra lỗi khi thêm vào tệp:', err);
          return;
        }
        console.log('Đã thêm nội dung vào tệp!');
      });      
}

//Sử dụng fs.rename() để thay đổi tên tệp.
{
    fs.rename('output.txt', 'renamed.txt', (err) => {
        if (err) {
          console.error('Đã xảy ra lỗi khi đổi tên tệp:', err);
          return;
        }
        console.log('Đã đổi tên tệp thành công!');
    });      
}

//Sử dụng fs.unlink() để xóa tệp.
{
    fs.unlink('renamed.txt', (err) => {
        if (err) {
          console.error('Đã xảy ra lỗi khi xóa tệp:', err);
          return;
        }
        console.log('Đã xóa tệp thành công!');
    });  
}

//Sử dụng fs.mkdir() để tạo một thư mục mới.
{
    fs.mkdir('myFolder', (err) => {
        if (err) {
          console.error('Đã xảy ra lỗi khi tạo thư mục:', err);
          return;
        }
        console.log('Đã tạo thư mục thành công!');
    });      
}

//Sử dụng fs.readdir() để lấy danh sách tệp và thư mục con trong một thư mục.
{
    fs.readdir('myFolder', (err, files) => {
        if (err) {
          console.error('Đã xảy ra lỗi khi đọc thư mục:', err);
          return;
        }
        console.log('Danh sách tệp trong thư mục:', files);
    });  
}

//Sử dụng fs.rmdir() để xóa một thư mục trống.
{
    fs.rmdir('myFolder', (err) => {
        if (err) {
          console.error('Đã xảy ra lỗi khi xóa thư mục:', err);
          return;
        }
        console.log('Đã xóa thư mục thành công!');
    });  
}

//Đọc tệp bằng Stream
{
    const readableStream = fs.createReadStream('largeFile.txt', 'utf8');

    readableStream.on('data', (chunk) => {
        console.log('Đã đọc được đoạn dữ liệu:', chunk);
    });

    readableStream.on('end', () => {
        console.log('Đã đọc xong tệp');
    });
}

//Ghi tệp bằng Stream
{
    const writableStream = fs.createWriteStream('output.txt');

    writableStream.write('Xin chào, Node.js!\n');
    writableStream.write('Đây là dòng thứ hai.\n');
    writableStream.end();

    writableStream.on('finish', () => {
        console.log('Đã ghi xong tệp');
    });

}

//Sử dụng Promise với module fs
{
    const fsPromises = require('fs').promises;

    fsPromises.readFile('example.txt', 'utf8')
        .then((data) => {
            console.log('Nội dung tệp:', data);
        })
        .catch((err) => {
            console.error('Đã xảy ra lỗi khi đọc tệp:', err);
    });

}

//Theo dõi thay đổi trên tệp/thư mục
{
    fs.watch('example.txt', (eventType, filename) => {
        console.log(`Đã xảy ra sự kiện ${eventType} trên tệp ${filename}`);
    });  
}