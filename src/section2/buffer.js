//Buffer là một đối tượng dùng để xử lý dữ liệu nhị phân (binary data). 
//Buffer được sử dụng khi làm việc với các luồng dữ liệu (streams), 
//như đọc/ghi tệp, xử lý dữ liệu từ mạng, hoặc bất kỳ tình huống nào yêu cầu thao tác với dữ liệu nhị phân.

//Buffer hỗ trợ nhiều loại mã hóa khi chuyển đổi giữa chuỗi và Buffer, bao gồm:
    //utf8 (mặc định): Mã hóa Unicode phổ biến nhất.
    //ascii: Mã hóa ASCII 7-bit.
    //base64: Mã hóa Base64, thường dùng để chuyển đổi dữ liệu nhị phân thành chuỗi có thể đọc được.
    //hex: Mã hóa dạng thập lục phân (hexadecimal), biểu diễn mỗi byte bằng 2 ký tự hex.

//Buffer
{
    const buffer = Buffer.from('Hello World');
    console.log(buffer);
}

//Write to buffer
{
    const buffer = Buffer.alloc(20);
    buffer.write('hello, buffer');
    console.log(buffer.toString());
    console.log(buffer.toString('utf8', 0, 5)); 
    console.log(buffer[0]); 
    console.log(buffer[1]); 
    console.log(buffer[2]); 
    const buffer1 = Buffer.from('ABC');
    const buffer2 = Buffer.from('ABD');
    console.log(buffer1.compare(buffer2)); 
}