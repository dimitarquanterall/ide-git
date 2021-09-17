/*
 * Copyright (c) 2010-2020 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */
let rs = require('http/v4/rs');
let configurations = require('core/v4/configurations');

rs.service()
	.resource('')
	.post(function (ctx, request) {
		let data = request.getJSON();
		for (let i = 0; i < data.env.length; i++) {
			configurations.set(data.env[i].key, data.env[i].value);
		}
	})
	.execute();