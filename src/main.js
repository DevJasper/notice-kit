//
// notice.showLoading({
//     title: 'Loading'
// });
//
const showLoading = (options) => {
    notice.showLoading(options);

    setTimeout(() => {
        notice.hideLoading()
    },3000)
}