@echo off
SET DIRNAME=%~dp0
IF "%JAVA_HOME%" == "" (
    SET JAVACMD=java
) ELSE (
    SET JAVACMD=%JAVA_HOME%\bin\java
)
SET CLASSPATH=%DIRNAME%gradle\wrapper\gradle-wrapper.jar
"%JAVACMD%" -classpath "%CLASSPATH%" org.gradle.wrapper.GradleWrapperMain %*
