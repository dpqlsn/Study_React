// 1번 과제
// 문자열을 반환하는 함수 타입
type StringTransformer = (text: string, shift: number) => string;

// 반환값이 없는 (void 반환) 함수 타입
type VoidStringTransformer = (text: string, shift: number) => void;

// 문자열을 암호화하는 함수
const encode: StringTransformer = (text, shift) => {
    return text
        .split('')
        .map((char) => String.fromCharCode(char.charCodeAt(0) + shift))
        .join('');
};

// 문자열을 복호화하는 함수
const decode: StringTransformer = (text, shift) => {
    return text
        .split('')
        .map((char) => String.fromCharCode(char.charCodeAt(0) - shift))
        .join('');
};

// 암호화된 문자열을 콘솔에 출력하는 함수
const printEncrypted: VoidStringTransformer = (text, shift) => {
    console.log(encode(text, shift));
};

// 사용 예시
const original = "hello";
const shiftValue = 3;

const encrypted = encode(original, shiftValue);
console.log("Encrypted:", encrypted); // "khoor"

const decrypted = decode(encrypted, shiftValue);
console.log("Decrypted:", decrypted); // "hello"

printEncrypted("typescript", 2); // 암호화된 결과를 콘솔에 출력