export default interface Iuser {
    /* 이 id는 Primary key라 하는 DB에서 테이블 생성할 때의 기본 키.
    테이블로 만든 열은 _id, username, password를 갖게 된다.*/
    _id: number;
    username: string;
    password: string;
}
