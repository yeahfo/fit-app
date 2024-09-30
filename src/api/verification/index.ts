export function createVerificationCodeForLogin( mobileOrEmail: string ) {
    return fetch( 'http://localhost:8080/verification-codes/for-login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( { mobileOrEmail: mobileOrEmail } )
    } );
}