/* 데이터베이스 업데이트 혹은 삽입 시  반환될 객체
mysql은 이제 query(열/열/열 형태 ) 이 형태로 데이터를 반환한다. 
이를 이제 generic type에 넘겨주고, 반환 시 알게 된다.*/
export default interface IMySQLResult {
    fieldCount: number;
    affectedRows: number;
    insertId: number;
    serverStatus: number;
    warningCount: number;
    message: string;
    protocol41: boolean;
    changedRows: number;
}
