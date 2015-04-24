<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" isELIgnored="false"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>新建症状</title>
	<%@include file="../common/resource.jsp"%>
</head>
<body>
	<div class="container" style="width: 40%; margin-top: 100px;">
		<form class="form-horizontal bind-create-from" action="${SPM_CONTEXT}/syndrome/create"
			method="post">
			<fieldset>
				<div id="legend" class="">
					<legend class="">创建症状</legend>
				</div>
				<div class="control-group">
					<div class="form-group">
						<label for="symptomName" class="col-sm-3 control-label">症状名</label>
						<div class="col-sm-9">
							<input type="text" class="form-control" name="symptomName"
								id="symptomName" placeholder="症状名">
						</div>
					</div>
					<div class="form-group">
						<label for="description" class="col-sm-3 control-label">症状描述</label>
						<div class="col-sm-9">
							<input type="text" class="form-control" name="description"
							 	id="description" placeholder="症状描述">
						</div>
					</div>
					<div class="form-group">
						<label for="syndromeElementStart" class="col-sm-3 control-label">症素A</label>
						<div class="col-sm-9">
							<input type="text" class="form-control" name="syndromeElementStart" 
								id="syndromeElementStart" placeholder="症素A">
						</div>
					</div>
					<div class="form-group">
						<label for="syndromeElementEnd" class="col-sm-3 control-label">症素B</label>
						<div class="col-sm-9">
							<input type="text" class="form-control" name="syndromeElementEnd"
								id="syndromeElementEnd" placeholder="症素B">
						</div>
					</div>
					<div class="form-group">
						<div class="col-sm-offset-3 col-sm-9">
							<button type="button" class="btn btn-primary bind-create-submit-button">登录</button>
						</div>
					</div>
				</div>
			</fieldset>
		</form>
	</div>
	
	<script src="${SPM_CONTEXT}/js/views/create.js"></script>
</body>
</html>