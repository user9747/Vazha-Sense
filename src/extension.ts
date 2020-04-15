import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let provider1 = vscode.languages.registerCompletionItemProvider('vazha', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			var completion_items = [];

			const ellipsisCompletion = new vscode.CompletionItem('എല്ലിപ്സിസ് ');
			ellipsisCompletion.filterText = 'ellipsis ';
			ellipsisCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(ellipsisCompletion)

			const thettayaCompletion = new vscode.CompletionItem('തെറ്റായ ');
			thettayaCompletion.filterText = 'thettaya ';
			thettayaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(thettayaCompletion)

			const onnumillaCompletion = new vscode.CompletionItem('ഒന്നുമില്ല ');
			onnumillaCompletion.filterText = 'onnumilla ';
			onnumillaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(onnumillaCompletion)

			const nadappilakkathaCompletion = new vscode.CompletionItem('നടപ്പിലാക്കാത്ത ');
			nadappilakkathaCompletion.filterText = 'nadappilakkatha ';
			nadappilakkathaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(nadappilakkathaCompletion)

			const sheriCompletion = new vscode.CompletionItem('ശരി ');
			sheriCompletion.filterText = 'sheri ';
			sheriCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(sheriCompletion)

			const __nirmana_class__Completion = new vscode.CompletionItem('__നിർമാണ_ക്ലാസ്__ ');
			__nirmana_class__Completion.filterText = '__nirmana_class__ ';
			__nirmana_class__Completion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(__nirmana_class__Completion)

			const __pramanam__Completion = new vscode.CompletionItem('__പ്രമാണം__ ');
			__pramanam__Completion.filterText = '__pramanam__ ';
			__pramanam__Completion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(__pramanam__Completion)

			const __irakkumathi__Completion = new vscode.CompletionItem('__ഇറക്കുമതി__ ');
			__irakkumathi__Completion.filterText = '__irakkumathi__ ';
			__irakkumathi__Completion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(__irakkumathi__Completion)

			const __loader__Completion = new vscode.CompletionItem('__ലോഡർ__ ');
			__loader__Completion.filterText = '__loader__ ';
			__loader__Completion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(__loader__Completion)

			const __peru__Completion = new vscode.CompletionItem('__പേര്__ ');
			__peru__Completion.filterText = '__peru__ ';
			__peru__Completion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(__peru__Completion)

			const __kett__Completion = new vscode.CompletionItem('__കെട്ട്__ ');
			__kett__Completion.filterText = '__kett__ ';
			__kett__Completion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(__kett__Completion)

			const __vivaranam__Completion = new vscode.CompletionItem('__വിവരണം__ ');
			__vivaranam__Completion.filterText = '__vivaranam__ ';
			__vivaranam__Completion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(__vivaranam__Completion)

			const absCompletion = new vscode.CompletionItem('എബിഎസ് ');
			absCompletion.filterText = 'abs ';
			absCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(absCompletion)

			const ellaamCompletion = new vscode.CompletionItem('എല്ലാം ');
			ellaamCompletion.filterText = 'ellaam ';
			ellaamCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(ellaamCompletion)

			const enthengilumCompletion = new vscode.CompletionItem('എന്തെങ്കിലും ');
			enthengilumCompletion.filterText = 'enthengilum ';
			enthengilumCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(enthengilumCompletion)

			const asciiCompletion = new vscode.CompletionItem('ആസ്കി ');
			asciiCompletion.filterText = 'ascii ';
			asciiCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(asciiCompletion)

			const aakunnaCompletion = new vscode.CompletionItem('ആകുന്നു ');
			aakunnaCompletion.filterText = 'aakunna ';
			aakunnaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(aakunnaCompletion)

			const boolCompletion = new vscode.CompletionItem('ബൂള് ');
			boolCompletion.filterText = 'bool ';
			boolCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(boolCompletion)

			const nirthanasthalamCompletion = new vscode.CompletionItem('നിരതനസ്തലം ');
			nirthanasthalamCompletion.filterText = 'nirthanasthalam ';
			nirthanasthalamCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(nirthanasthalamCompletion)

			const bytearrayCompletion = new vscode.CompletionItem('ബ്യ്തെഅര്രയ് ');
			bytearrayCompletion.filterText = 'byte array ';
			bytearrayCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(bytearrayCompletion)

			const byteCompletion = new vscode.CompletionItem('ബൈറ്റുകൾ ');
			byteCompletion.filterText = 'byte ';
			byteCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(byteCompletion)

			const vilikanpattanaCompletion = new vscode.CompletionItem('വിളികാനപറ്റന ');
			vilikanpattanaCompletion.filterText = 'vilikan pattana ';
			vilikanpattanaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(vilikanpattanaCompletion)

			const aksharamCompletion = new vscode.CompletionItem('അക്ഷരം ');
			aksharamCompletion.filterText = 'aksharam ';
			aksharamCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(aksharamCompletion)

			const classmethodCompletion = new vscode.CompletionItem('ക്ലാസ്_മെഥെട് ');
			classmethodCompletion.filterText = 'class method ';
			classmethodCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(classmethodCompletion)

			const compileCompletion = new vscode.CompletionItem('കംപൈല് ');
			compileCompletion.filterText = 'compile ';
			compileCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(compileCompletion)

			const sangheernamCompletion = new vscode.CompletionItem('സങ്കീർണ്ണമായ ');
			sangheernamCompletion.filterText = 'sangheernam ';
			sangheernamCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(sangheernamCompletion)

			const pakarpavakasamCompletion = new vscode.CompletionItem('പകർപ്പവകാശ ');
			pakarpavakasamCompletion.filterText = 'pakarpavakasam ';
			pakarpavakasamCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(pakarpavakasamCompletion)

			const creditukalCompletion = new vscode.CompletionItem('ക്രെഡിറ്റുകൾ ');
			creditukalCompletion.filterText = 'creditukal ';
			creditukalCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(creditukalCompletion)

			const gunamozhivakukaCompletion = new vscode.CompletionItem('ഗുണം_ഒഴിവാക്കുക ');
			gunamozhivakukaCompletion.filterText = 'gunam ozhivakuka ';
			gunamozhivakukaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(gunamozhivakukaCompletion)

			const nighanduCompletion = new vscode.CompletionItem('നിഘണ്ഡു ');
			nighanduCompletion.filterText = 'nighandu ';
			nighanduCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(nighanduCompletion)

			const namavilapattikaCompletion = new vscode.CompletionItem('നാമാവലിപ്പട്ടിക ');
			namavilapattikaCompletion.filterText = 'namavilapattika ';
			namavilapattikaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(namavilapattikaCompletion)

			const divmodCompletion = new vscode.CompletionItem('ദിവ്മൊദ് ');
			divmodCompletion.filterText = 'divmod ';
			divmodCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(divmodCompletion)

			const nirathukaCompletion = new vscode.CompletionItem('നിരത്തുക ');
			nirathukaCompletion.filterText = 'nirathuka ';
			nirathukaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(nirathukaCompletion)

			const vilaCompletion = new vscode.CompletionItem('വില ');
			vilaCompletion.filterText = 'vila ';
			vilaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(vilaCompletion)

			const cheyyuCompletion = new vscode.CompletionItem('ചെയ്യൂ ');
			cheyyuCompletion.filterText = 'cheyyu ';
			cheyyuCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(cheyyuCompletion)

			const purathCompletion = new vscode.CompletionItem('പുറത്ത് ');
			purathCompletion.filterText = 'purath ';
			purathCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(purathCompletion)

			const arippaCompletion = new vscode.CompletionItem('അരിപ്പ ');
			arippaCompletion.filterText = 'arippa ';
			arippaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(arippaCompletion)

			const ozhukukaCompletion = new vscode.CompletionItem('ഒഴുകുക ');
			ozhukukaCompletion.filterText = 'ozhukuka ';
			ozhukukaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(ozhukukaCompletion)

			const formatCompletion = new vscode.CompletionItem('ഫോർമാറ്റ് ');
			formatCompletion.filterText = 'format ';
			formatCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(formatCompletion)

			const uranjaganamCompletion = new vscode.CompletionItem('ഉറഞ്ഞഗണം ');
			uranjaganamCompletion.filterText = 'uranja ganam ';
			uranjaganamCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(uranjaganamCompletion)

			const getattrCompletion = new vscode.CompletionItem('ഗെതത്ത്ര് ');
			getattrCompletion.filterText = 'getattr ';
			getattrCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(getattrCompletion)

			const aagolaCompletion = new vscode.CompletionItem('ആഗോള ');
			aagolaCompletion.filterText = 'aagola ';
			aagolaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(aagolaCompletion)

			const hasattrCompletion = new vscode.CompletionItem('ഹ്സത്ത്ര് ');
			hasattrCompletion.filterText = 'hasattr ';
			hasattrCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(hasattrCompletion)

			const hashCompletion = new vscode.CompletionItem('ഹാഷ് ');
			hashCompletion.filterText = 'hash ';
			hashCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(hashCompletion)

			const sahiyikukaCompletion = new vscode.CompletionItem('സഹായിക്കൂ ');
			sahiyikukaCompletion.filterText = 'sahiyikuka ';
			sahiyikukaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(sahiyikukaCompletion)

			const hexCompletion = new vscode.CompletionItem('ഹെക്സ് ');
			hexCompletion.filterText = 'hex ';
			hexCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(hexCompletion)

			const idCompletion = new vscode.CompletionItem('ഐഡി ');
			idCompletion.filterText = 'id ';
			idCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(idCompletion)

			const inputCompletion = new vscode.CompletionItem('ഇൻപുട്ട് ');
			inputCompletion.filterText = 'input ';
			inputCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(inputCompletion)

			const poornasankyaCompletion = new vscode.CompletionItem('പൂർണ്ണസംഖ്യ ');
			poornasankyaCompletion.filterText = 'poorna sankya ';
			poornasankyaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(poornasankyaCompletion)

			const sandharbamanoCompletion = new vscode.CompletionItem('സന്ദര്ഭമാണൊ ');
			sandharbamanoCompletion.filterText = 'sandharbamano ';
			sandharbamanoCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(sandharbamanoCompletion)

			const upaclassanoCompletion = new vscode.CompletionItem('ഉപക്ലാസ്സണൊ ');
			upaclassanoCompletion.filterText = 'upaclassano ';
			upaclassanoCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(upaclassanoCompletion)

			const prakriyaCompletion = new vscode.CompletionItem('പ്രക്രിയ ');
			prakriyaCompletion.filterText = 'prakriya ';
			prakriyaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(prakriyaCompletion)

			const neelamCompletion = new vscode.CompletionItem('നീളം ');
			neelamCompletion.filterText = 'neelam ';
			neelamCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(neelamCompletion)

			const licenseCompletion = new vscode.CompletionItem('ലൈസൻസ് ');
			licenseCompletion.filterText = 'license ';
			licenseCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(licenseCompletion)

			const pattikaCompletion = new vscode.CompletionItem('പട്ടിക ');
			pattikaCompletion.filterText = 'pattika ';
			pattikaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(pattikaCompletion)

			const pradhesavasikalCompletion = new vscode.CompletionItem('പ്രദേശവാസികൾ ');
			pradhesavasikalCompletion.filterText = 'pradhesavasikal ';
			pradhesavasikalCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(pradhesavasikalCompletion)

			const bupadamCompletion = new vscode.CompletionItem('ഭൂപടം ');
			bupadamCompletion.filterText = 'bupadam ';
			bupadamCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(bupadamCompletion)

			const paramavadhiCompletion = new vscode.CompletionItem('പരമാവധി ');
			paramavadhiCompletion.filterText = 'paramavadhi ';
			paramavadhiCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(paramavadhiCompletion)

			const memoryviewCompletion = new vscode.CompletionItem('മെമൊര്യ്വിഎവ് ');
			memoryviewCompletion.filterText = 'memoryview ';
			memoryviewCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(memoryviewCompletion)

			const kuranjaCompletion = new vscode.CompletionItem('കുറഞ്ഞ ');
			kuranjaCompletion.filterText = 'kuranja ';
			kuranjaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(kuranjaCompletion)

			const aduthathCompletion = new vscode.CompletionItem('അടുത്തത് ');
			aduthathCompletion.filterText = 'aduthath ';
			aduthathCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(aduthathCompletion)

			const vasthuCompletion = new vscode.CompletionItem('വസ്തു ');
			vasthuCompletion.filterText = 'vasthu ';
			vasthuCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(vasthuCompletion)

			const octCompletion = new vscode.CompletionItem('ഒകട ');
			octCompletion.filterText = 'oct ';
			octCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(octCompletion)

			const thurakkukaCompletion = new vscode.CompletionItem('തുറക്കുക ');
			thurakkukaCompletion.filterText = 'thurakkuka ';
			thurakkukaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(thurakkukaCompletion)

			const kramamCompletion = new vscode.CompletionItem('ക്രമം  ');
			kramamCompletion.filterText = 'kramam ';
			kramamCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(kramamCompletion)

			const molilCompletion = new vscode.CompletionItem('മൊളില് ');
			molilCompletion.filterText = 'molil ';
			molilCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(molilCompletion)

			const achadikukaCompletion = new vscode.CompletionItem('അച്ചടിക്കുക ');
			achadikukaCompletion.filterText = 'achadikuka ';
			achadikukaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(achadikukaCompletion)

			const swabavamCompletion = new vscode.CompletionItem('സ്വഭാവം ');
			swabavamCompletion.filterText = 'swabavam ';
			swabavamCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(swabavamCompletion)

			const upekshikuCompletion = new vscode.CompletionItem('ഉപേക്ഷിക്കു ');
			upekshikuCompletion.filterText = 'upekshiku ';
			upekshikuCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(upekshikuCompletion)

			const shreniCompletion = new vscode.CompletionItem('ശ്രേണി ');
			shreniCompletion.filterText = 'shreni ';
			shreniCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(shreniCompletion)

			const chthrikarikukaCompletion = new vscode.CompletionItem('ചിത്രീകരിക്കുക  ');
			chthrikarikukaCompletion.filterText = 'chthrikarikuka ';
			chthrikarikukaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(chthrikarikukaCompletion)

			const vipareethaCompletion = new vscode.CompletionItem('വിപരീത ');
			vipareethaCompletion.filterText = 'vipareetha ';
			vipareethaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(vipareethaCompletion)

			const vattomCompletion = new vscode.CompletionItem('വട്ടം ');
			vattomCompletion.filterText = 'vattom ';
			vattomCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(vattomCompletion)

			const ganamCompletion = new vscode.CompletionItem('ഗണം ');
			ganamCompletion.filterText = 'ganam ';
			ganamCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(ganamCompletion)

			const setattrCompletion = new vscode.CompletionItem('സെതത്ത്ര് ');
			setattrCompletion.filterText = 'setattr ';
			setattrCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(setattrCompletion)

			const pooluCompletion = new vscode.CompletionItem('പൂള് ');
			pooluCompletion.filterText = 'poolu ';
			pooluCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(pooluCompletion)

			const adukiyaCompletion = new vscode.CompletionItem('അടുക്കിയ ');
			adukiyaCompletion.filterText = 'adukiya ';
			adukiyaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(adukiyaCompletion)

			const nischalamethodCompletion = new vscode.CompletionItem('നിശ്ചലമെഥൊദ് ');
			nischalamethodCompletion.filterText = 'nischalamethod ';
			nischalamethodCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(nischalamethodCompletion)

			const naadaCompletion = new vscode.CompletionItem('നാട ');
			naadaCompletion.filterText = 'naada ';
			naadaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(naadaCompletion)

			const mothamCompletion = new vscode.CompletionItem('മൊത്തം ');
			mothamCompletion.filterText = 'motham ';
			mothamCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(mothamCompletion)

			const superCompletion = new vscode.CompletionItem('സൂപ്പർ ');
			superCompletion.filterText = 'super ';
			superCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(superCompletion)

			const niraCompletion = new vscode.CompletionItem('നിര ');
			niraCompletion.filterText = 'nira ';
			niraCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(niraCompletion)

			const tharamCompletion = new vscode.CompletionItem('തരം ');
			tharamCompletion.filterText = 'tharam ';
			tharamCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(tharamCompletion)

			const vividhamCompletion = new vscode.CompletionItem('വിവിധം ');
			vividhamCompletion.filterText = 'vividham ';
			vividhamCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(vividhamCompletion)

			const poottuCompletion = new vscode.CompletionItem('പൂട്ടു  ');
			poottuCompletion.filterText = 'poottu ';
			poottuCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(poottuCompletion)

			// Keywords 

			const umCompletion = new vscode.CompletionItem('ഉം');
			umCompletion.filterText = 'um';
			umCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(umCompletion)

			const poleyCompletion = new vscode.CompletionItem('പോലെ');
			poleyCompletion.filterText = 'poley';
			poleyCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(poleyCompletion)

			const urappikukaCompletion = new vscode.CompletionItem('ഉറപ്പിക്കുക');
			urappikukaCompletion.filterText = 'urappikuka';
			urappikukaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(urappikukaCompletion)

			const asyncCompletion = new vscode.CompletionItem('അസിൻക്');
			asyncCompletion.filterText = 'async';
			asyncCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(asyncCompletion)

			const kathirikukaCompletion = new vscode.CompletionItem('കാത്തിരിക്കുക');
			kathirikukaCompletion.filterText = 'kathirikuka';
			kathirikukaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(kathirikukaCompletion)

			const pottikukaCompletion = new vscode.CompletionItem('പൊട്ടിക്കുക');
			pottikukaCompletion.filterText = 'pottikuka';
			pottikukaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(pottikukaCompletion)

			const classCompletion = new vscode.CompletionItem('ക്ലാസ്സ്');
			classCompletion.filterText = 'class';
			classCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(classCompletion)

			const thudarukaCompletion = new vscode.CompletionItem('തുടരുക');
			thudarukaCompletion.filterText = 'thudaruka';
			thudarukaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(thudarukaCompletion)

			const nirvachanamCompletion = new vscode.CompletionItem('നിര്‍വചനം');
			nirvachanamCompletion.filterText = 'nirvachanam';
			nirvachanamCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(nirvachanamCompletion)

			const kalayukaCompletion = new vscode.CompletionItem('കളയുക');
			kalayukaCompletion.filterText = 'kalayuka';
			kalayukaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(kalayukaCompletion)

			const allengilengilCompletion = new vscode.CompletionItem('അല്ലെങ്കിലെങ്കില്‍');
			allengilengilCompletion.filterText = 'allengilengil';
			allengilengilCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(allengilengilCompletion)

			const allengilCompletion = new vscode.CompletionItem('അല്ലെങ്കില്‍');
			allengilCompletion.filterText = 'allengil';
			allengilCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(allengilCompletion)

			const asadhaarnamCompletion = new vscode.CompletionItem('അസാധാരണം');
			asadhaarnamCompletion.filterText = 'asadhaarnam';
			asadhaarnamCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(asadhaarnamCompletion)

			const avasaanamaayiCompletion = new vscode.CompletionItem('അവസാനമായി');
			avasaanamaayiCompletion.filterText = 'avasaanamaayi';
			avasaanamaayiCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(avasaanamaayiCompletion)

			const karangatteyCompletion = new vscode.CompletionItem('കറങ്ങട്ടെ');
			karangatteyCompletion.filterText = 'karangattey';
			karangatteyCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(karangatteyCompletion)

			const ividunnCompletion = new vscode.CompletionItem('ഇവിടുന്ന്');
			ividunnCompletion.filterText = 'ividunn';
			ividunnCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(ividunnCompletion)

			const agolaCompletion = new vscode.CompletionItem('ആഗോള');
			agolaCompletion.filterText = 'agola';
			agolaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(agolaCompletion)

			const engilCompletion = new vscode.CompletionItem('എങ്കില്‍');
			engilCompletion.filterText = 'engil';
			engilCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(engilCompletion)

			const irakkumathiCompletion = new vscode.CompletionItem('ഇറക്കുമതി');
			irakkumathiCompletion.filterText = 'irakkumathi';
			irakkumathiCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(irakkumathiCompletion)

			const ilCompletion = new vscode.CompletionItem('ൽ');
			ilCompletion.filterText = 'il';
			ilCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(ilCompletion)

			const aanuCompletion = new vscode.CompletionItem('ആണ്');
			aanuCompletion.filterText = 'aanu';
			aanuCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(aanuCompletion)

			const lambdaCompletion = new vscode.CompletionItem('ലാംഡ');
			lambdaCompletion.filterText = 'lambda';
			lambdaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(lambdaCompletion)

			const naadanallathaCompletion = new vscode.CompletionItem('നാടനല്ലാത്ത');
			naadanallathaCompletion.filterText = 'naadanallatha';
			naadanallathaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(naadanallathaCompletion)

			const allaCompletion = new vscode.CompletionItem('അല്ല');
			allaCompletion.filterText = 'alla';
			allaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(allaCompletion)

			const adhavaCompletion = new vscode.CompletionItem('അഥവാ');
			adhavaCompletion.filterText = 'adhava';
			adhavaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(adhavaCompletion)

			const kadannpoCompletion = new vscode.CompletionItem('കടന്ന്പോ');
			kadannpoCompletion.filterText = 'kadannpo';
			kadannpoCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(kadannpoCompletion)

			const uyarthukaCompletion = new vscode.CompletionItem('ഉയര്ത്തുക');
			uyarthukaCompletion.filterText = 'uyarthuka';
			uyarthukaCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(uyarthukaCompletion)

			const madakkamCompletion = new vscode.CompletionItem('മടക്കം');
			madakkamCompletion.filterText = 'madakkam';
			madakkamCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(madakkamCompletion)

			const sramishunokkuCompletion = new vscode.CompletionItem('ശ്രമിച്ചുനോക്കൂ');
			sramishunokkuCompletion.filterText = 'sramishunokku';
			sramishunokkuCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(sramishunokkuCompletion)

			const ithuvareyCompletion = new vscode.CompletionItem('ഇതുവരെ');
			ithuvareyCompletion.filterText = 'ithuvarey';
			ithuvareyCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(ithuvareyCompletion)

			const koodeyCompletion = new vscode.CompletionItem('കൂടെ');
			koodeyCompletion.filterText = 'koodey';
			koodeyCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(koodeyCompletion)

			const phalamCompletion = new vscode.CompletionItem('ഫലം');
			phalamCompletion.filterText = 'phalam';
			phalamCompletion.kind = vscode.CompletionItemKind.Keyword;
			completion_items.push(phalamCompletion)

			return completion_items;
		}
	});

	const provider2 = vscode.languages.registerCompletionItemProvider(
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				// get all text until the `position` and check if it reads `console.`
				// and if so then complete if `log`, `warn`, and `error`
				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('console.')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('log', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('warn', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('error', vscode.CompletionItemKind.Method),
				];
			}
		},
		'.' // triggered whenever a '.' is being typed
	);

	context.subscriptions.push(provider1, provider2);
}