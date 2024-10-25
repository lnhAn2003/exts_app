//Readable Stream: Luồng chỉ đọc, dùng để đọc dữ liệu từ nguồn (ví dụ: đọc từ tệp hoặc từ mạng).
//Writable Stream: Luồng chỉ ghi, dùng để ghi dữ liệu vào đích (ví dụ: ghi vào tệp hoặc gửi dữ liệu qua mạng).
//Duplex Stream: Luồng có thể đọc và ghi, có cả tính năng của Readable và Writable. Ví dụ: kết nối TCP.
//Transform Stream: Giống như Duplex Stream, nhưng có thể biến đổi dữ liệu trong khi đọc hoặc ghi. Ví dụ: nén hoặc giải nén dữ liệu

//Readable stream
{
    const fs = require('fs');

    // Tạo một Readable Stream từ tệp example.txt
    const readableStream = fs.createReadStream('src/read.txt', 'utf8');

    // Xử lý sự kiện 'data' để đọc từng đoạn dữ liệu
    readableStream.on('data', (chunk) => {
        console.log('Đọc được đoạn dữ liệu:', chunk);
    });

    // Xử lý sự kiện 'end' khi việc đọc kết thúc
    readableStream.on('end', () => {
        console.log('Đã đọc xong tệp');
    });
}

//writable stream
{
    const fs = require('fs');

    const writableStream = fs.createWriteStream('src/read.txt');

    writableStream.write('Hello this is writeable steam');

    writableStream.end();

    writableStream.on('finish', () => {
        console.log('ghi dữ liệu thành công')
    })
}

//Duplex Stream
{
    const { Duplex } = require('stream');

    const duplexStream = new Duplex({
        read(size) {
            this.push('Hello, World');
            this.push(null);
        },
        write(chunk, encoding, callback) {
            console.log(`ghi dữ liệu: ${chunk.toString()}`);
            callback();
        }
    });

    duplexStream.on('data', (chunk) => {
        console.log(`đọc dữ liệu: ${chunk.toString()}`);
    });

    duplexStream.write('Hello, writable');
    duplexStream.end();
}

//Transform Stream
{
    const fs = require('fs');
    const zlib = require('zlib');

    // Tạo một Transform Stream để nén dữ liệu
    const gzip = zlib.createGzip();

    // Tạo một Readable Stream từ tệp đầu vào
    const readableStream = fs.createReadStream('input.txt');

    // Tạo một Writable Stream cho tệp đầu ra
    const writableStream = fs.createWriteStream('output.txt.gz');

    // Sử dụng pipeline để đọc, nén và ghi dữ liệu
    readableStream.pipe(gzip).pipe(writableStream);

    console.log('Đã hoàn tất quá trình nén dữ liệu');
}

//Pipe and Channing
{
    const fs = require('fs');
    const zlib = require('zlib');

    fs.createReadStream('input.txt')
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream('output.txt.gz'));

    console.log('Tệp đã được nén');
}