export const GetDataPromise = new Promise((resolve, reject) => {

    let json = {};

    fetch('https://covid-19sl.s3-ap-northeast-1.amazonaws.com/data.json')
        .then(response => response.json())
        .then(response => {
            if (response) {

                response.prefectures.map((pre) => {
                    json[pre.prefecture] = pre;
                })

                resolve(json);
            }
        })
        .catch((error) => {
            reject();
            console.log('Something went wrong...', error)
        });
})