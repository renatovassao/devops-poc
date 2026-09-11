kind-up:
	kind create cluster

kind-down:
	kind delete cluster

flux-check:
	flux check --pre

flux-bootstrap:
	flux bootstrap github \
	--owner=$$GITHUB_USER \
	--repository=fleet-infra \
	--branch=main \
	--path=./clusters/my-cluster \
	--personal