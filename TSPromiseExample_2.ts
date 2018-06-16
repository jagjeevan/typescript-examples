"use strict";

namespace TSPromiseExample_2 {

    const performUpload = function(imgStatus: string) : Promise<{imgStatus : string}> {
        return new Promise((resolve) => {
            console.log(`Status: ${imgStatus}`);
            setTimeout(() => {
                resolve({imgStatus: imgStatus});
            }, 1000);
        });
    }

    var upload, compress, transfer;

    performUpload('uploading...')
        .then((res) => {
            upload = res;
            return performUpload('compressing...');
        })
        .then(res => {
            compress = res;
            return performUpload('transferring...');
        })
        .then(res => {
            transfer = res;
            return performUpload('completed');
        });
}
