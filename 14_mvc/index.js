const express = require('express');
const app = express();
const PORT = 9000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// 임시 데이터
const comments = [
    {
        id: 1,
        userId: 'helloworld',
        date: '2023-08-01',
        comment: '안녕하세요!'
    },
    {
        id: 2,
        userId: 'happy',
        date: '2023-08-02',
        comment: '반갑습니다!'
    },
    {
        id: 3,
        userId: 'lucky',
        date: '2023-08-03',
        comment: '행복하세요!'
    },
    {
        id: 4,
        userId: 'good',
        date: '2023-08-04',
        comment: '좋은저녁되세요!'
    },
]

app.get('/', (req, res) => {
    res.render('index');
});
//GET /comments
app.get('/comments', (req, res) => {
    res.render('comments', { commentInfos: comments });
});
//GET /comment/:id
app.get('/comment/:id', (req, res) => {
    
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});