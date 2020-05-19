
module.exports = {

    // REQUIRED: The full URL of the server to which we can append "/$export".
    baseURL: "https://sandbox.bcda.cms.gov/api/v1",

    // REQUIRED: The full URL of the token endpoint
    tokenEndpoint: "",

    // REQUIRED: The registered Client ID
    clientId: "",
    
    // Set this to false to allow tests to accept self-signed certificates.
    strictSSL: false,

    // Enter the path to the system-level export endpoint relative to the server
    // root (e.g.: "/$export"). Keep this empty if the server does not support
    // system-level export.
    systemExportEndpoint: "",
    //BCDA does not support System Level Export

    // Enter the path to the patient-level export endpoint relative to the
    // server root (e.g.: "/Patient/$export"). Keep this empty if the server
    // does not support patient-level export.
    patientExportEndpoint: "/Patient/$export",

    // Enter the path to the system-level export endpoint relative to the server
    // root (e.g.: "/Group/5/$export"). Please use the id of the group having
    // the least amount of resources. Keep this empty if the server does not
    // support group-level export.
    groupExportEndpoint: "/Group/6/$export",

    // While testing we need to attempt downloading at least one resource type.
    // Please enter the resource type that would be fast to export (because
    // there are not many records of that type). If the server does not support
    // system-level export, please make sure this resource type is accessible
    // through the patient-level or the group-level export endpoint. We use
    // "Patient" by default, just because we presume that it is present on every
    // server.
    fastestResource: "Patient",

    // The Private Key as JWK
    privateKey   : {
        "kty": "EC",
        "crv": "P-384",
        "d": "e8VccpNV6F-uZpGYt_RUq_qJ1jEM1OKtx7QiPUOxAlB9VXn1ialbTTNGpzTSMAhY",
        "x": "CVQvGDquuOoVG2e8MS-WEvMNmr3j6X64SET-Cm2BGENhlPS0AMpZxSiVAh5tfrvv",
        "y": "qLmWeZQeBuiLyjif_7lopX-ea7ws0jB5PqumGJDVK4DXWj4aDJ7CX1fMR8rmwsMo",
        "key_ops": [
            "sign"
        ],
        "ext": true,
        "kid": "457e3b331fa4dfe79591920ac12bccc6",
        "alg": "ES384"
    }
};
