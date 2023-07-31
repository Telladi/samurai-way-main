import React from "react";
import classes from "./Post.module.css";


export type PostPropsType = {
    message: string
    likesCount?: number
}

const Post = (props: PostPropsType ) => {
    return (
        <div className={classes.item}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAY1BMVEX///8AAADf39/Pz8/z8/P5+fn8/PyamppfX19PT0+vr6+ioqLn5+fW1tZ3d3fu7u41NTUZGRmGhobHx8epqam1tbUwMDBxcXEmJiY7OztHR0chISEODg6UlJRpaWl/f39XV1f40aQwAAAE2ElEQVRoge1b2XajMAwNZgsBAoQAAbL9/1dOM7GMKRjLWKRnzvS+9dT4Ylm7yG73i38AXsJeSLxPkgZJ9di3V+eFa7t/VEnwEd7sFjnfEd2yzXnT+4T2jbu7Le/0uNLB0814/eMC7wvHjdTNLTTEjlNsIvJYy/tCTM4bnMYM+TM8lG55CJ/cvAAnYgsLRlfcnWVlYududNm01DJxM9Vh1sjUlMSSqCM2u4JJ9naiIz4Mu56Vi87DogMVcSK2rJecRVqLdQkRsxBku7xj0ooroSEWss51YSHLSeXtCdelj0cZLC0o/OgNdisRi0tYfLMnFkd+oJY/6A4NxnLxUcv9Xmt+SASg2BXygQrU29aJpmBQuCN/HRpMyzZPCPk++OgH0TS0ZObCvuK9Eng8S2+SXd7b7A2e2XOVtEtH3RWigwuyy4xAU03UBZQSaw3zgPc3kVy2Qk5T8FykNvFIHo+WdrkJ15YIa80v+JG5ViqZjTYJ1jxEwrzuIcUmPyDtxkLDGivmn7MqyME+70nAe5oUahCs7LwnRIy7wTN3koix48WaSZTktWVnRywyT3wCDaphm30yvk+LTasCyIbmKz88fKiNTTPAzsT5zAI0tcYd2oeyzr5tkUGmj6uKodIuCFpzorrB2CfYP0V1M1Rpjt55e2ItSTdStKNy3VUHooolak6J/drlU3uicm9piKVuRb7YrRBvSNatkJovV7VZV0Nz0rqOHPAQmzp3RVdK6j7jKm0k5K72aSrLRO5NmsQ1BPaOvHclq5pXjbrtdunXDOT+4kt7H3Hlum4VP7rxP+yyr1mEDga2VfMsSn1n/YrpH61App0mbDfBKZ8LvNFGB9ZxR+Xm47L01k9oi9N2E6Mx+bm5CNZLc/4QLSBjaZqy7aeC/yd8po+6CbPOdSfw4s4pGnfJcoK0KZwupr15L+SeM1JunMW8VVCEhHPR0UiyC6fpbxqOxsNUw8mZGWx+DKvSTVnqllV4zCf/J5nJes1kXwwaa5GXtZ5lFrVl/MClA/OwSRKCUYLVIjKDVv7rvjp6ZfI+/WGXhFNdkpGHbHeQA1m70rYTeZPb+/3TWPV1RRe/I5YvX1C/qthg0hR/L7+8Gx5HQnXaYyirUyZlyNcVPQsmnXimPeMlX6ZcfRn13IdD0ry6N6ZOBmvKzd+bDU/XhgL3h/x9v0ZNvEHihq2awZzWlmdDEWhUZw0hYv3XCkORZxBAUgJimRqdIQZCre3GL6Ik6bHOTDxh+6FCZHgC0dOqbZMqX2TlqHg9GJR9Ai8UBmVaoh1DkdMII0E0bTyQ0JOAeLeDAvCiz1HEW9r2p99gaAn6EP4pWqYvQMO20N003LLRbGwJMDfT3vQFuQ4P8UHK8jL4+sbalAeILv+yTYP7ovyEEXR22ZGBJlKWhD5surSoRL2eKUCQS7n/A7HGHHCepSSjR8hlBfiuvXoF20TYg7jVySBkq3aT4ylgbqcebvJrNhi84gDjWeVFB0+Ut1kB7hmfqqwIPvmjb47z6l/5cSBM4whHLxzgu1VFAyRg9N1isGiV6wYVpMkJZIC5qoyGV77FazRCC5iiqRoY3z6I3wCqkkU3prCHyjn+HPO6npsJVJ7CpvmFg0rDPH3Dyw7qD5zZ0g967KH4WcNfBGxLfOb3X7+Ywx+aUDHA3ZtlIwAAAABJRU5ErkJggg==" alt=""/>
            <a className={classes.item} href="">{props.message}</a>
            <div>
            <span>like</span>
            </div>
        </div>
    )
}

export default Post;