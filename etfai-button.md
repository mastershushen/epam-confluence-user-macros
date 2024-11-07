Macro Name: etfai-button

Visibility: Visible to all users in the Macro Browser

Macro Title: ETF.AI Button

Description: ⚠️ Works only in the ETF.AI space ⚠️

Categories: Formatting

Macro Body Processing: No macro body

```
## Macro title: ETF.AI Button
## Macro has a body: N
## Body processing: No macro body
## Output: Macro
##
## Developed by: Vasily Fomchenko
## Date created: 07/11/2024
## Installed by: Vasily Fomchenko

## @param Size:title=Size|type=enum|enumValues=md,sm,lg|required=true
## @param Title:title=Title|type=string|required=true
## @param URL:title=URL|type=string|required=true
## @param Target:title=Open in New Tab|type=boolean

<ac:structured-macro ac:name="auibutton">
    <ac:parameter ac:name="class">etfai-button etfai-button--v1 etfai-button--$paramSize</ac:parameter>
    <ac:parameter ac:name="type">standard</ac:parameter>
    <ac:parameter ac:name="title">$paramTitle</ac:parameter>
    <ac:parameter ac:name="url">$paramURL</ac:parameter>
    <ac:parameter ac:name="target">$paramTarget</ac:parameter>
</ac:structured-macro>
```
