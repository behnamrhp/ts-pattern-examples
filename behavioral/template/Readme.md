## Template

## Intro

This pattern is a behavioral pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.

In this pattern we have a superclass that consists all of the steps of a logic to run but it lets subclasses change some specific steps in a way to not harm the base of the structure.

## Where you can use it

as we said you can use this pattern in some scenarios that you want to have a base of structure for a logic but in some steps you want to replace multiple different logics.

## Example

In this example, we have a document data analyzer that we should do some steps for this feature.

1. at first step we want to open the file
2. extract raw data of that file
3. analize the raw data
4. send report of analized data
5. close the file

in this example, steps 3 and 4 will be the same in all scenarios, but all other steps will be different based on the file type that we have, "CSV" or "DOC,". As a consequence, DocDataAnalyzer and CsvDataAnalyzer, which are our subclasses, can replace those steps by their own logics.
