
module.exports = {

    // REQUIRED: The full URL of the server to which we can append "/$export".
    // baseURL: "https://sandbox.bcda.cms.gov/api/v1",
    baseURL: `${process.env.BASE_URL}/api/v1`,

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

};
