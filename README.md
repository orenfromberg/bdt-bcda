# bdt
author: AdHoc, LLC
BDT BCDA is a HL7 FHIR Bulk Data conformance test tool to provide initial support for tests for the CBS BCDA
Server. BDT BCDA is based on the BDT tool provided by the SMART Health IT project.  It is forked from
https://github.com/smart-on-fhir/bdt .  BDT was initially developed by Boston Children's Hospital.
It tests a FHIR Bulk Data Server to the HL7 FHIR BULK DATA STU 1 as of May 2020.

Bulk Data Test Suite and Test Runner for BCDA

Environment:
set TOKEN= to the procces.evironment before the call to the Node.js application
This can either be done by prepending TOKEN=<paste token here> to the node index.js file on the command line, or by specifying and alternative like
TOKEN=command$(and puting some call that returns a valid token)

Usage:
An Example call might look like this:
TOKEN=xystekdkjd node index.js --pattern "testSuite/**/!(authorization.test.js")

Notes:

1. Supplying the --pattern "testSuite/**/!(authorization.test.js") skips the authorization tests, which are not supported.
2. System level exports are left out because BCDA doesn't currently support
3. There were other code changes made to set the token as a environment variables  (See First Commit)